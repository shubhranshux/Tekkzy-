import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Compass,
  Cpu,
  Database,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import LandingMotion from "@/components/landing/landing-motion";

const benefits = [
  { icon: BriefcaseBusiness, title: "Real-world experience", text: "Work on meaningful products that solve challenges for growing businesses." },
  { icon: Lightbulb, title: "Learn by building", text: "Turn curiosity into craft with practical projects, feedback, and mentorship." },
  { icon: Users, title: "Mentorship & guidance", text: "Learn from people who care about your progress and make time to help." },
  { icon: BarChart3, title: "Grow with responsibility", text: "Own important work, build confidence, and see your contribution compound." },
];

const pathways = [
  { eyebrow: "For students", title: "Still studying? Start building your future now.", text: "Get practical exposure to real projects, industry workflows, and supportive teammates.", bullets: ["Practical project experience", "Portfolio building", "Team collaboration", "Industry-oriented skills"], cta: "Explore internships", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", position: "50% 48%" },
  { eyebrow: "For interns", title: "Do your best. Build something meaningful.", text: "Learn alongside experienced people and turn your first role into a strong foundation.", bullets: ["Learn from experts", "Work on real projects", "Get feedback & improve", "Build your portfolio"], cta: "Explore internship", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", position: "60% 46%" },
  { eyebrow: "For freshers", title: "Your first job should be the start of your growth.", text: "Build confidence, discover your strengths, and find a team where your potential is visible.", bullets: ["Technical confidence", "Communication skills", "Product thinking", "Career guidance"], cta: "Explore entry-level roles", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", position: "26% 53%" },
  { eyebrow: "For experienced professionals", title: "Bring experience. Create impact.", text: "Join ambitious teams, mentor future builders, and help shape what comes next.", bullets: ["Take ownership", "Work across technologies", "Mentor & lead", "Explore new opportunities"], cta: "Explore opportunities", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", position: "72% 44%" },
];

const disciplines = [
  { icon: Code2, name: "Software Development", roles: ["Frontend Development", "Backend Development", "Full Stack Development", "Mobile Development"] },
  { icon: Palette, name: "Design", roles: ["UI/UX Design", "Graphic Design", "Product Design"] },
  { icon: Cpu, name: "Data & AI", roles: ["Data Analytics", "Machine Learning", "Artificial Intelligence", "Business Intelligence"] },
  { icon: Megaphone, name: "Digital & Marketing", roles: ["Digital Marketing", "SEO", "Content", "Social Media"] },
  { icon: ShieldCheck, name: "Business & Operations", roles: ["Business Development", "Project Coordination", "Operations"] },
];

const jobs = [
  { title: "Frontend Developer", meta: "Engineering · Full-time", tone: "blue" },
  { title: "Software Development Intern", meta: "Engineering · Internship", tone: "violet" },
  { title: "UI/UX Design Intern", meta: "Design · Internship", tone: "pink" },
  { title: "Data Analyst", meta: "Data & AI · Full-time", tone: "green" },
  { title: "Digital Marketing Intern", meta: "Digital & Marketing · Internship", tone: "orange" },
  { title: "SEO Specialist", meta: "Digital & Marketing · Full-time", tone: "yellow" },
  { title: "Content Marketing Associate", meta: "Digital & Marketing · Full-time", tone: "coral" },
  { title: "Social Media Intern", meta: "Digital & Marketing · Internship", tone: "teal" },
];

const internJourney = [
  { number: "01", title: "Start with context", text: "Understand our products, customers, and the problem behind the work before you write a line of code.", icon: Compass },
  { number: "02", title: "Learn with a guide", text: "Pair with a Tekkzy mentor who gives you feedback, shares the why, and helps you find your own way.", icon: HeartHandshake },
  { number: "03", title: "Build something real", text: "Ship a meaningful project with your team. Your work is reviewed, used, and celebrated—not parked in a folder.", icon: Code2 },
  { number: "04", title: "Grow into your next step", text: "Leave with stronger skills, a real portfolio story, and a clear conversation about where you can go next.", icon: Sparkles },
];

function Label({ children }: { children: React.ReactNode }) {
  return <div className="careers-label"><span />{children}</div>;
}

function ArrowButton({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <Link href="#open-positions" className={`careers-button${secondary ? " careers-button-secondary" : ""}`}>{children}<ArrowRight size={15} /></Link>;
}

export default function CareersPage() {
  return (
    <LandingMotion><div className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-copy">
          <Label>Careers at Tekkzy</Label>
          <h1>Build your career.<br /><em>Build what&apos;s next.</em></h1>
          <p>At Tekkzy, we believe careers are built through real work, meaningful challenges, and supportive teams. Whether you&apos;re a student, intern, fresher, or experienced professional, there&apos;s a place for you here.</p>
          <div className="careers-actions"><ArrowButton>Explore opportunities</ArrowButton><ArrowButton secondary>Join our talent network</ArrowButton></div>
          <div className="careers-proof"><span><Users size={15} /> Internships</span><span><Zap size={15} /> Full-time roles</span><span><Lightbulb size={15} /> Learning</span><span><Workflow size={15} /> Real projects</span></div>
        </div>
        <div className="careers-hero-visual">
          <div className="careers-orb" />
          <div className="careers-hero-photo"><Image src="/careers/team-collaboration.jpg" alt="A diverse team collaborating around a laptop" fill priority sizes="(max-width: 800px) 94vw, 52vw" style={{ objectFit: "cover", objectPosition: "50% 44%" }} /></div>
          <div className="careers-float careers-float-top"><Sparkles size={16} /><span>Ideas<br /><b>People</b><br />Technology</span></div>
          <div className="careers-float careers-float-chart"><small>Team growth</small><strong>+32%</strong><div><i /><i /><i /><i /><i /></div></div>
          <div className="careers-handwritten">Good people<br /><b>build great things</b></div>
        </div>
      </section>

      <section className="careers-intro careers-shell">
        <div><Label>Why Tekkzy?</Label><h2>More than a job.<br /><em>A place to grow.</em></h2><p>We give individuals opportunities to learn, experiment, create, and take ownership of work that matters.</p></div>
        <div className="benefits-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="benefit-card" key={title}><div className="benefit-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="pathways-section careers-shell">
        <div className="section-heading"><Label>Find your fit</Label><h2>There&apos;s a path<br /><em>for everyone.</em></h2><p>Wherever you are in your journey, there&apos;s room to learn, contribute, and grow with us.</p></div>
        <div className="pathways-grid">{pathways.map((item, index) => <article className="pathway-card careers-reveal-card" key={item.title}><div className="pathway-copy"><Label>{item.eyebrow}</Label><h3>{item.title}</h3><p>{item.text}</p><ul>{item.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={14} />{bullet}</li>)}</ul><Link href="#open-positions" className="pathway-link">{item.cta}<ArrowRight size={14} /></Link></div><div className="pathway-image"><Image src={index === 0 ? "/careers/tech-team.jpg" : index === 1 ? "/careers/mentor-interns.png" : item.image} alt="Tekkzy colleague" fill sizes="(max-width: 700px) 90vw, 30vw" style={{ objectFit: "cover", objectPosition: item.position }} /></div></article>)}</div>
      </section>

      <section className="intern-journey careers-shell">
        <div className="intern-journey-intro"><Label>How we help interns grow</Label><h2>Don&apos;t just join.<br /><em>Become Tekkzy.</em></h2><p>We designed our internship experience to move you from curious to capable—with context, coaching, and the confidence to own your work.</p><div className="mentor-quote"><span>“</span><p>You won&apos;t be handed busywork here. You&apos;ll be trusted with a problem, supported by a team, and encouraged to make it better.</p><small>— The Tekkzy way of working</small></div></div>
        <div className="intern-journey-grid">{internJourney.map(({ number, title, text, icon: Icon }) => <article className="journey-card careers-reveal-card" key={number}><div className="journey-card-top"><span>{number}</span><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><div className="journey-line" /></article>)}</div>
      </section>

      <section className="disciplines-section careers-shell"><div className="section-heading section-heading-row"><div><Label>Internship domains</Label><h2>Find where<br /><em>you belong.</em></h2></div><p>Explore opportunities across multiple disciplines and build a career path that fits your interests.</p><Link href="#open-positions" className="text-arrow">View all openings <ArrowRight size={15} /></Link></div><div className="disciplines-grid">{disciplines.map(({ icon: Icon, name, roles }) => <article className="discipline-card" key={name}><Icon size={19} /><h3>{name}</h3><ul>{roles.map((role) => <li key={role}>{role}</li>)}</ul></article>)}</div></section>

      <section className="growth-section careers-shell"><div><Label>Your growth has a path</Label><h2>Keep learning.<br /><em>Keep moving.</em></h2><p>There isn&apos;t one definition of career growth. At Tekkzy, growth can mean deeper expertise, greater responsibility, team leadership, or a new direction. We keep the conversation open and help you choose the next challenge that fits.</p><div className="growth-steps">{["Learn", "Explore", "Build", "Contribute", "Lead", "Create impact"].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></div>)}</div></div><div className="growth-panel"><div className="growth-panel-top"><Label>Learning & development</Label><h3>Keep learning. Keep moving.</h3><p>Technology changes quickly. Your learning shouldn&apos;t stop.</p></div><div className="learning-grid"><span><Code2 size={16} />Technical learning</span><span><Database size={16} />Project learning</span><span><Users size={16} />Mentorship</span><span><HeartHandshake size={16} />Feedback</span><span><Sparkles size={16} />Knowledge sharing</span><span><Zap size={16} />Continuous growth</span></div></div></section>

      <section className="project-banner careers-shell"><div className="project-banner-image"><Image src="/careers/mentor-interns.png" alt="A mentor helping interns learn together" fill sizes="40vw" style={{ objectFit: "cover", objectPosition: "50% 45%" }} /></div><div><Label>Our internship domains</Label><h2>Learn on projects<br /><em>that matter.</em></h2><p>Contribute to real products, real clients, and real impact from day one. Ask questions, try ideas, and leave every week with a new piece of your craft.</p><ArrowButton>Explore internships</ArrowButton></div></section>

      <section className="jobs-section careers-shell" id="open-positions"><div className="section-heading section-heading-row"><div><Label>Open positions</Label><h2>Find your next<br /><em>opportunity.</em></h2><p className="jobs-heading-copy">Explore roles where your skills, curiosity, and ideas can make a meaningful difference.</p></div><div className="job-filters" aria-label="Filter open positions"><span className="job-filter-heading">Filter by role</span><button className="active">All</button><button>Internships</button><button>Full-time</button><button>Design</button><button>Development</button></div></div><div className="jobs-grid">{jobs.map((job) => <article className={`job-card job-${job.tone}`} key={job.title}><div className="job-card-icon"><Search size={17} /></div><h3>{job.title}</h3><p>{job.meta}</p><Link href="/contact" className="job-link">View position <ArrowRight size={14} /></Link></article>)}</div><div className="talent-banner"><div><Label>Don&apos;t see your role?</Label><h3>Let&apos;s still talk.</h3><p>Great people don&apos;t always arrive when a role is posted. Share your profile and we&apos;ll keep you in mind.</p></div><Link href="/contact" className="careers-button">Join our talent network <ArrowRight size={15} /></Link></div></section>

      <section className="faq-section careers-shell"><div><Label>Frequently asked questions</Label><h2>Everything you need<br /><em>to know.</em></h2><p>Still curious? Reach out and we&apos;ll be happy to help.</p></div><div className="faq-list">{["Who can apply for internships?", "Do internships involve real projects?", "Can freshers apply for full-time positions?", "Can I apply if there isn't a suitable opening?", "What skills do I need?", "Can an internship lead to a full-time opportunity?"].map((question) => <details key={question}><summary>{question}<ChevronDown size={16} /></summary><p>Yes. We look for curious, thoughtful people who want to learn and contribute. The right attitude matters as much as experience.</p></details>)}</div></section>

      <section className="careers-final"><div className="careers-final-silhouette" /><div className="careers-shell"><Label>Your next chapter starts here.</Label><h2>Build a career<br /><em>you&apos;re proud of.</em></h2><p>Whether you&apos;re looking for your first internship, your next role, or your next challenge, Tekkzy is building opportunities for people who want to create more.</p><div className="careers-actions"><ArrowButton>Explore opportunities</ArrowButton><ArrowButton secondary>Send your profile</ArrowButton></div></div></section>
    </div></LandingMotion>
  );
}
