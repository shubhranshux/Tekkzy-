"use client";

import React, { useEffect, useRef } from "react";

// Exact Fragment Shader from tekkzy-refined (1).html with ultra-smooth anti-aliased edge
const FS_SOURCE = `#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 c;uniform float R,lon0,lat0;uniform sampler2D tx;
float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
void main(){
vec2 p=(gl_FragCoord.xy-c)/R;float d=length(p);
vec3 L=normalize(vec3(-.8,.55,.12));vec2 ld=normalize(L.xy);
vec3 col=vec3(.006,.011,.03);
float side=.12+.88*smoothstep(-.5,.9,dot(p/max(d,1e-3),ld));
{float e=max(d-1.,0.);col+=vec3(.1,.38,1.)*exp(-e*e*22.)*.42*side+vec3(.06,.2,.9)*exp(-e*3.5)*.1*side;}
if(d<1.01){
float edge=1.-smoothstep(1.-.004,1.+.002,d);
float z=sqrt(max(1.-d*d,0.));vec3 N=vec3(p,z);float dl=dot(N,L);float diff=max(dl,0.);
float ca=cos(lat0),sa=sin(lat0);vec3 q=vec3(N.x,N.y*ca+N.z*sa,-N.y*sa+N.z*ca);
float cl=cos(lon0),sl=sin(lon0);vec3 w=vec3(q.x*cl+q.z*sl,q.y,-q.x*sl+q.z*cl);
float lat=asin(clamp(w.y,-1.,1.)),lon=atan(w.x,w.z);
vec2 uv=vec2(lon/6.2831853+.5,.5-lat/3.1415927);
vec4 T=texture2D(tx,uv);float land=T.r,li=T.g;
float terr=0.;if(land>.02)terr=n3(w*7.)*.65+n3(w*23.)*.35;
vec3 ocean=vec3(.008,.02,.06)+vec3(.02,.075,.24)*pow(diff,1.25);
vec3 ground=mix(vec3(.02,.03,.05),vec3(.075,.095,.135),terr)*(.55+.45*terr)+vec3(.06,.14,.32)*pow(diff,1.1)*(.5+terr);
vec3 s=mix(ocean,ground,land);
vec2 px=vec2(1./2048.,1./1024.)*1.6;
float ce=abs(texture2D(tx,uv+vec2(px.x,0.)).r-land)+abs(texture2D(tx,uv+vec2(0.,px.y)).r-land);
s+=vec3(.025,.08,.2)*ce*(.2+.8*diff);
vec3 Hh=normalize(L+vec3(0,0,1));float sp=pow(max(dot(N,Hh),0.),60.);
s+=vec3(.3,.55,1.)*sp*.8*(1.-land);
s+=vec3(.05,.12,.3)*smoothstep(.0,.9,dl)*.5;float night=1.-smoothstep(.15,.75,diff);
float lt=0.;if(li>.02){float sp2=smoothstep(.78,1.,n3(w*330.)+.35*n3(w*760.));lt=pow(li,1.7)*(.04+2.2*sp2);}s+=vec3(1.,.55,.2)*lt*.8*night+vec3(1.,.82,.55)*pow(lt,2.5)*.9*night;
float fr=1.-z;float lit=.2+.9*smoothstep(-.4,.8,dl);
s+=vec3(.1,.38,1.)*pow(fr,3.2)*.5*lit+vec3(.2,.5,1.)*pow(fr,5.)*.2*lit;
col=mix(col,s,edge);}
col=1.-exp(-col*1.6);
col+=(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5)/255.;
gl_FragColor=vec4(col,1.);}`;

export default function GlobeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const webglCanvasRef = useRef<HTMLCanvasElement>(null);
  const netCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const g = webglCanvasRef.current;
    const nc = netCanvasRef.current;
    const container = containerRef.current;
    if (!g || !nc || !container) return;

    const x = nc.getContext("2d");
    if (!x) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = g.getContext("webgl", {
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch {
      gl = null;
    }

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const D = Math.PI / 180;
    let raf = 0;
    let last = 0;
    let live = true;
    let W = 0;
    let H = 0;
    let S = 1;
    let GS = 1;
    let cx = 0;
    let cy = 0;
    let R = 0;
    let T = 0;
    let lon0 = 0;
    let lat0 = 0;
    let ang = 86;
    let ang0 = 0;
    let vel = -4.8;
    let dlat = 0;
    let drag: { id: number; x: number; y: number; t: number } | null = null;
    const AUTO = -4.8;
    let ready = false;
    const U: Record<string, WebGLUniformLocation | null> = {};
    const M = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    function mk(ty: number, s: string) {
      if (!gl) return null;
      const o = gl.createShader(ty);
      if (!o) return null;
      gl.shaderSource(o, s);
      gl.compileShader(o);
      return o;
    }

    if (gl) {
      const pr = gl.createProgram();
      const vs = mk(
        gl.VERTEX_SHADER,
        "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}"
      );
      const fs = mk(gl.FRAGMENT_SHADER, FS_SOURCE);
      if (pr && vs && fs) {
        gl.attachShader(pr, vs);
        gl.attachShader(pr, fs);
        gl.linkProgram(pr);

        if (gl.getProgramParameter(pr, gl.LINK_STATUS)) {
          gl.useProgram(pr);
          const b = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, b);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW
          );
          const al = gl.getAttribLocation(pr, "a");
          gl.enableVertexAttribArray(al);
          gl.vertexAttribPointer(al, 2, gl.FLOAT, false, 0, 0);

          ["c", "R", "lon0", "lat0", "tx"].forEach((n) => {
            if (pr && gl) U[n] = gl.getUniformLocation(pr, n);
          });

          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = function () {
            if (!gl) return;
            const tx = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tx);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
            gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            if (U.tx) gl.uniform1i(U.tx, 0);
            ready = true;
            if (reduce) frame(performance.now());
          };
          img.onerror = function () {
            root.classList.add("no-gl");
          };
          img.src = "/globe-texture.png";

          g.addEventListener("webglcontextlost", function (e) {
            e.preventDefault();
            root.classList.add("no-gl");
          });
        } else {
          gl = null;
          root.classList.add("no-gl");
        }
      } else {
        gl = null;
        root.classList.add("no-gl");
      }
    } else {
      root.classList.add("no-gl");
    }

    function V(la: number, lo: number) {
      const c = Math.cos(la * D);
      return [c * Math.sin(lo * D), Math.sin(la * D), c * Math.cos(lo * D)];
    }

    function P(v: number[], s: number) {
      const X = v[0] * s;
      const Y = v[1] * s;
      const Z = v[2] * s;
      const cl = Math.cos(lon0);
      const sl = Math.sin(lon0);
      const ca = Math.cos(lat0);
      const sa = Math.sin(lat0);
      const x1 = X * cl - Z * sl;
      const z1 = X * sl + Z * cl;
      const y1 = Y * ca - z1 * sa;
      const z2 = Y * sa + z1 * ca;
      return { x: cx + x1 * R, y: cy - y1 * R, z: z2, vis: z2 > 0 || x1 * x1 + y1 * y1 > 1 };
    }

    const NS = [
      [20.27, 85.84],
      [50.1, 8.7],
      [55.7, 37.6],
      [25.2, 55.3],
      [19.1, 72.9],
      [39.9, 116.4],
      [35.7, 139.7],
      [1.35, 103.8],
      [-1.3, 36.8],
      [51.5, -0.1],
    ].map(function (n) {
      return V(n[0], n[1]);
    });

    const AR = [
      [0, 1, 0],
      [0, 2, 0],
      [0, 5, 0],
      [0, 6, 0],
      [0, 7, 1],
      [0, 8, 0],
      [3, 9, 0],
      [5, 6, 0],
    ].map(function (a, i) {
      const A = NS[a[0]];
      const B = NS[a[1]];
      const dp = Math.max(-1, Math.min(1, A[0] * B[0] + A[1] * B[1] + A[2] * B[2]));
      const om = Math.acos(dp);
      return { A: A, B: B, om: om, dot: a[2], h: 0.05 + om * 0.2, ph: i * 0.37 };
    });

    function pt(a: (typeof AR)[0], u: number) {
      const s = Math.sin(a.om) || 1;
      const k1 = Math.sin((1 - u) * a.om) / s;
      const k2 = Math.sin(u * a.om) / s;
      return P(
        [
          a.A[0] * k1 + a.B[0] * k2,
          a.A[1] * k1 + a.B[1] * k2,
          a.A[2] * k1 + a.B[2] * k2,
        ],
        1 + a.h * Math.sin(u * Math.PI)
      );
    }

    function size() {
      S = Math.min(window.devicePixelRatio || 1, 1.5);
      W = nc?.clientWidth || container?.clientWidth || window.innerWidth;
      H = nc?.clientHeight || container?.clientHeight || window.innerHeight;
      GS = S * 0.85;

      if (g) {
        g.width = Math.round(W * GS);
        g.height = Math.round(H * GS);
      }
      if (nc) {
        nc.width = Math.round(W * S);
        nc.height = Math.round(H * S);
      }
      if (x) {
        x.setTransform(S, 0, 0, S, 0, 0);
      }

      if (W > 760 && W / H > 1.1) {
        R = Math.min(H * 0.99, W * 0.5);
        cx = W * 0.84;
        cy = H * 1.05;
      } else {
        R = W * 0.95;
        cx = W * 0.62;
        cy = H * 0.9;
      }

      if (gl && g) gl.viewport(0, 0, g.width, g.height);
      if (reduce && ready) frame(performance.now());
    }

    function frame(now: number) {
      raf = 0;
      let dt = 0;
      if (!reduce) {
        dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
        last = now;
      }
      T += dt;
      const t = reduce ? 5 : T;
      let k: number;

      M.x += (M.tx - M.x) * 0.04;
      M.y += (M.ty - M.y) * 0.04;

      if (reduce && !ang0) {
        ang = 88 - t * 4.8;
        ang0 = 1;
      }

      if (!reduce && !drag) {
        ang += vel * dt;
        vel += (AUTO - vel) * Math.min(1, dt * 1.2);
        dlat *= 1 - Math.min(1, dt * 0.8);
      }

      ang = ((ang % 360) + 360) % 360;
      lon0 = (ang + (M.x - 0.5) * 8) * D;
      lat0 = (-5 + dlat + (0.5 - M.y) * 5) * D;

      if (gl) {
        if (ready) {
          gl.uniform2f(U.c, cx * GS, (H - cy) * GS);
          gl.uniform1f(U.R, R * GS);
          gl.uniform1f(U.lon0, lon0);
          gl.uniform1f(U.lat0, lat0);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        } else {
          gl.clearColor(0.008, 0.016, 0.04, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }

      if (x) {
        x.clearRect(0, 0, W, H);
        x.lineCap = "round";

        AR.forEach(function (a) {
          let prev: { x: number; y: number; z: number; vis: boolean } | null = null;
          x.beginPath();
          for (k = 0; k <= 56; k++) {
            const p = pt(a, k / 56);
            if (prev && prev.vis && p.vis) x.lineTo(p.x, p.y);
            else if (p.vis) x.moveTo(p.x, p.y);
            prev = p;
          }
          if (a.dot) {
            x.setLineDash([1.5, 6]);
            x.strokeStyle = "rgba(150,195,255,.6)";
            x.lineWidth = 1.5;
          } else {
            x.setLineDash([]);
            x.strokeStyle = "rgba(125,180,255,.4)";
            x.lineWidth = 1;
          }
          x.stroke();
          x.setLineDash([]);
        });

        x.globalCompositeOperation = "lighter";
        AR.forEach(function (a) {
          const u = (t * 0.16 + a.ph) % 1.5;
          for (k = 0; k < 16; k++) {
            const uu = u - k * 0.012;
            if (uu < 0 || uu > 1) continue;
            const p = pt(a, uu);
            if (!p.vis) continue;
            x.fillStyle = "rgba(140,200,255," + ((1 - k / 16) * 0.7).toFixed(3) + ")";
            x.beginPath();
            x.arc(p.x, p.y, k ? 1.1 : 2.2, 0, 6.283);
            x.fill();
          }
        });

        NS.forEach(function (v, n) {
          const p = P(v, 1.002);
          if (p.z < 0.03) return;
          const r = n ? 9 : 16;
          const gr = x.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
          gr.addColorStop(0, "rgba(210,235,255,.95)");
          gr.addColorStop(0.25, "rgba(110,170,255,.5)");
          gr.addColorStop(1, "rgba(60,120,255,0)");
          x.fillStyle = gr;
          x.beginPath();
          x.arc(p.x, p.y, r, 0, 6.283);
          x.fill();
          x.fillStyle = "rgba(255,255,255,.95)";
          x.beginPath();
          x.arc(p.x, p.y, n ? 1.8 : 2.8, 0, 6.283);
          x.fill();
          if (!n) {
            const ph = (t * 0.5) % 1;
            x.strokeStyle = "rgba(140,200,255," + ((1 - ph) * 0.6).toFixed(3) + ")";
            x.lineWidth = 1;
            x.beginPath();
            x.arc(p.x, p.y, 4 + ph * 22, 0, 6.283);
            x.stroke();
          }
        });

        x.globalCompositeOperation = "source-over";
      }

      if (!reduce && live) raf = requestAnimationFrame(frame);
    }

    function go() {
      if (reduce || raf || !live) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    }

    function setLive(v: boolean) {
      live = v;
      if (v) go();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    function handleVisibility() {
      setLive(!document.hidden && vis);
    }
    document.addEventListener("visibilitychange", handleVisibility);

    let vis = true;
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(function (en) {
        vis = en[0].isIntersecting;
        setLive(!document.hidden && vis);
      });
      observer.observe(container);
    }

    function onGlobe(e: PointerEvent) {
      if (!R || !nc) return false;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest &&
        target.closest("a, button, .hero-ai-widget, .hero-html-btn, .hero-html-cta, .nav-pill")
      ) {
        return false;
      }
      const r = nc.getBoundingClientRect();
      const dx = e.clientX - r.left - cx;
      const dy = e.clientY - r.top - cy;
      return dx * dx + dy * dy <= R * R;
    }

    function onPointerDown(e: PointerEvent) {
      if (e.button > 0 || !onGlobe(e)) return;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, t: e.timeStamp };
      vel = 0;
      root.style.cursor = "grabbing";
      root.style.userSelect = "none";
      root.style.webkitUserSelect = "none";
      if (e.pointerType === "mouse") e.preventDefault();
    }

    function onPointerMove(e: PointerEvent) {
      M.tx = e.clientX / window.innerWidth;
      M.ty = e.clientY / window.innerHeight;

      if (!drag) {
        if (e.pointerType === "mouse") {
          const c = onGlobe(e) ? "grab" : "";
          if (
            root.style.cursor !== c &&
            (root.style.cursor === "grab" || c === "grab")
          ) {
            root.style.cursor = c;
          }
        }
        return;
      }

      if (e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      const dt = Math.max((e.timeStamp - drag.t) / 1000, 0.001);
      const dLon = -dx / R / D;
      const dLat = dy / R / D;
      ang += dLon;
      dlat = Math.max(-40, Math.min(40, dlat + dLat));
      const v = Math.max(-400, Math.min(400, dLon / dt));
      vel = vel * 0.6 + v * 0.4;
      drag.x = e.clientX;
      drag.y = e.clientY;
      drag.t = e.timeStamp;
      if (reduce && ready) frame(performance.now());
    }

    function endDrag(e: PointerEvent) {
      if (!drag || e.pointerId !== drag.id) return;
      if (e.timeStamp - drag.t > 80) vel = 0;
      drag = null;
      root.style.cursor = onGlobe(e) ? "grab" : "";
      root.style.userSelect = "";
      root.style.webkitUserSelect = "";
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    let rt: NodeJS.Timeout | null = null;
    function onResize() {
      if (rt) clearTimeout(rt);
      rt = setTimeout(size, 100);
    }
    window.addEventListener("resize", onResize);

    // Initial size and start render loop
    size();
    go();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (observer) observer.disconnect();
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      window.removeEventListener("resize", onResize);
      if (rt) clearTimeout(rt);
      if (raf) cancelAnimationFrame(raf);
      if (root.style.cursor === "grab" || root.style.cursor === "grabbing") {
        root.style.cursor = "";
      }
      root.style.userSelect = "";
      root.style.webkitUserSelect = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-globe-canvas-wrapper"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <canvas
        ref={webglCanvasRef}
        id="g"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
      <canvas
        ref={netCanvasRef}
        id="n"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
      <div
        className="veil"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, rgba(2,4,13,.65), rgba(2,4,13,.18) 52%, transparent 70%), linear-gradient(to top, rgba(2,4,13,.55), transparent 38%)",
        }}
      />
    </div>
  );
}
