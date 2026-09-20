import Image from "next/image";
import { Heart, Hexagon, LineChart, Network } from "lucide-react";

const values = [
  { id: "modern-technology", label: <>Modern<br />Technology</>, icon: Hexagon },
  { id: "real-business-impact", label: <>Real Business<br />Impact</>, icon: LineChart },
  { id: "scalable-solutions", label: <>Scalable<br />Solutions</>, icon: Network },
  { id: "people-first", label: <>A People-First<br />Approach</>, icon: Heart },
];

export default function WhoWeAre() {
  return (
    <section className="who-refine" aria-labelledby="who-we-are-heading">
      <div className="who-refine-grid">
        <div className="who-refine-visual" aria-label="Tekkzy people-first technology team">
          <div className="who-refine-orbit who-refine-orbit-one" />
          <div className="who-refine-orbit who-refine-orbit-two" />
          <div className="who-refine-media">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Professional team collaborating with Tekkzy technology"
              fill
              sizes="(max-width: 780px) 92vw, 46vw"
              className="who-refine-media-image"
              priority
            />
            <div className="who-refine-media-wash" />
            <div className="who-refine-people-card" aria-hidden="true">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80"
                alt=""
                fill
                sizes="132px"
                className="who-refine-people-image"
              />
              <div className="who-refine-people-glass" />
              <div className="who-refine-device" />
            </div>
            <div className="who-refine-idea-card" aria-hidden="true">
              <span>Ideas</span>
              <span>People</span>
              <span>Technology</span>
              <span>Growth</span>
            </div>
          </div>
          <div className="who-refine-caption" aria-hidden="true">
            <span className="who-refine-caption-line" />
            <span>People · Technology · Growth</span>
          </div>
        </div>

        <div className="who-refine-copy">
          <div className="who-refine-handnote" aria-hidden="true">
            <span>Building</span>
            <span>Businesses</span>
            <span>Together</span>
            <svg viewBox="0 0 122 22" role="presentation">
              <path d="M2 18C32 5 73 2 119 10" />
            </svg>
          </div>

          <div className="who-refine-eyebrow">
            <span className="who-refine-eyebrow-dot" />
            Who We Are
          </div>
          <h2 id="who-we-are-heading">
            A Technology Partner
            <br />
            for What&apos;s <span>Next</span>
          </h2>
          <p className="who-refine-description">
            We are building a more connected, efficient, and intelligent business world. Tekkzy provides innovative software solutions that help organizations simplify operations, enhance productivity, and achieve sustainable growth.
          </p>

          <div className="who-refine-values" aria-label="Tekkzy values">
            {values.map(({ id, label, icon: Icon }) => (
              <div className="who-refine-value" key={id}>
                <span className="who-refine-value-icon">
                  <Icon size={17} strokeWidth={2.2} />
                </span>
                <span className="who-refine-value-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
