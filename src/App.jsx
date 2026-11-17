import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoveUpRight,
  Sparkles,
  Code2,
  Layers3,
  Smartphone,
  Braces,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import { projects, skills } from "./data";
import mainPhoto from "./assets/profile-main.png";
import secondaryPhoto from "./assets/profile-secondary.png";

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    className="social-link"
  >
    {children}
  </a>
);

function App() {
  return (
    <div className="overflow-hidden bg-paper text-ink">
      <Navbar />
      <main>
        <section
          id="home"
          className="hero-wrap relative px-4 pb-20 pt-36 sm:px-6 sm:pt-44"
        >
          <div className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-lime/30 blur-[100px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div className="relative z-10">
              <Reveal>
                {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfe4d6] bg-white/70 px-4 py-2 text-xs font-bold text-[#59614f]">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8abf42] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#79a83b]" /></span>
                  Available for opportunities
                </div> */}
                <p className="eyebrow mb-5">
                  Frontend developer · Puducherry, India
                </p>
                <h1 className="hero-title">
                  I build digital
                  <br />
                  <span className="relative inline-block">
                    experiences
                    <span className="hero-underline" />
                  </span>
                  <br />
                  that feel <span className="text-[#829c56]">right.</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
                  Hey, I’m Harish — a frontend developer focused on creating
                  clean, responsive and engaging web experiences with React and
                  modern UI technologies.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href="#work" className="primary-btn">
                    Explore my work <ArrowUpRight size={17} />
                  </a>
                  <a href="#contact" className="secondary-btn">
                    Get in touch
                  </a>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[Code2, Layers3, Smartphone].map((I, i) => (
                      <span
                        key={i}
                        className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-paper bg-white text-ink"
                      >
                        <I size={16} />
                      </span>
                    ))}
                  </div>
                  <p className="text-xs leading-5 text-muted">
                    <strong className="text-ink">Thoughtful by design.</strong>
                    <br />
                    Built for people, not just screens.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal
              delay={0.12}
              className="relative mx-auto w-full max-w-[510px]"
            >
              <div className="portrait-frame relative ml-auto w-[88%] max-w-[430px]">
                <div className="absolute -inset-4 rotate-[-5deg] rounded-[2.5rem] border border-[#dfe5d7]" />
                {/* <div className="absolute -right-8 top-12 z-10 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-soft backdrop-blur sm:block">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-muted"><Sparkles size={13} /> My approach</div>
                  <p className="text-sm font-extrabold">Simple. Useful.<br />Beautiful.</p>
                </div> */}
                <img
                  src={mainPhoto}
                  alt="Harish standing at a professional event"
                  className="relative z-[1] aspect-[4/5] w-full rounded-[2rem] object-cover object-center shadow-soft"
                />
                <div className="absolute -bottom-7 -left-14 z-10 hidden w-44 overflow-hidden rounded-2xl border-4 border-paper shadow-soft sm:block">
                  <img
                    src={secondaryPhoto}
                    alt="Harish outdoors"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 right-4 z-10 rounded-2xl bg-lime px-4 py-3 shadow-soft sm:right-[-28px]">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#485b2d]">
                    Currently crafting
                  </p>
                  <p className="mt-1 text-sm font-extrabold">
                    Better web experiences ↗
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <a
            href="#about"
            className="mx-auto mt-24 flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-muted"
          >
            Scroll to explore <ArrowDown size={14} />
          </a>
        </section>

        <section
          id="about"
          className="section-pad border-y border-line bg-white px-4 sm:px-6"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow mb-4">01 / A little about me</p>
              <h2 className="section-title">
                Curious mind.
                <br />
                <span className="text-[#91a76b]">Frontend focus.</span>
              </h2>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#e9eee2]">
                <img
                  src={secondaryPhoto}
                  alt="Harish outdoors in a natural setting"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center">
              <p className="text-xl font-semibold leading-9 tracking-tight sm:text-2xl">
                I enjoy turning ideas into intuitive interfaces — where
                thoughtful details, accessible layouts and smooth interactions
                come together.
              </p>
              <p className="mt-6 text-sm leading-8 text-muted">
                I’m a web developer with hands-on experience building responsive
                websites and web application interfaces. My day-to-day work
                revolves around React, JavaScript, Tailwind CSS and Bootstrap. I
                also work with API integration and basic backend connectivity to 
                
                bring complete user experiences to life.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ["01+", "Year of experience"],
                  ["08+", "UI technologies"],
                  ["100%", "Curiosity to learn"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl bg-paper p-5">
                    <p className="text-3xl font-extrabold tracking-tight">
                      {n}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-muted">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-extrabold underline decoration-[#b7d27d] decoration-2 underline-offset-8"
              >
                More about what I can do <MoveUpRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="work" className="section-pad px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="02 / Selected work"
                title="A few things I’ve been building."
                note="A selection of web experiences and interfaces. Some are evolving projects, built around real-world product needs."
              />
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, i) => (
                <Reveal key={project.number} delay={i * 0.08}>
                  <article className="project-card group h-full">
                    <div
                      className={`project-art relative flex aspect-[1.25/1] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${project.tone}`}
                    >
                      <div className="absolute left-5 top-5 font-mono text-[10px] tracking-widest text-ink/50">
                        PROJECT / {project.number}
                      </div>
                      <motion.div
                        whileHover={{ rotate: -7, scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 180 }}
                        className="grid h-32 w-32 place-items-center rounded-[2rem] border border-white/70 bg-white/50 text-4xl font-extrabold tracking-tighter text-ink shadow-[0_25px_60px_rgba(30,40,20,.12)] backdrop-blur-sm"
                      >
                        {project.mark}
                      </motion.div>
                      <div className="absolute bottom-5 right-5 rounded-full bg-white/70 p-3">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <div className="px-1 pb-3 pt-6">
                      <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#87936f]">
                        {project.type}
                      </p>
                      <div className="mt-2 flex items-start justify-between gap-3">
                        <h3 className="text-xl font-extrabold tracking-tight">
                          {project.name}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit ${project.name}`}
                            className="rounded-full border border-line p-2 transition group-hover:border-ink group-hover:bg-ink group-hover:text-white"
                          >
                            <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                      <p className="mt-3 min-h-[88px] text-sm leading-7 text-muted">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-muted">
              Project descriptions are summaries; add your live demos and
              repository links before publishing.
            </p>
          </div>
        </section>

        <section id="skills" className="section-pad bg-[#eef1e9] px-4 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow mb-4">03 / My toolkit</p>
              <h2 className="section-title">
                The tools behind
                <br />
                the <span className="text-[#91a76b]">pixels.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-8 text-muted">
                I use a practical set of frontend tools to create polished
                interfaces, build reusable components and connect the UI with
                data.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {["Build interfaces", "Solve problems", "Keep learning"].map(
                  (t) => (
                    <span
                      key={t}
                      className="flex items-center gap-2 rounded-full border border-[#d8dfce] bg-white/60 px-4 py-2 text-xs font-bold"
                    >
                      <Check size={13} className="text-[#7d9953]" />
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {skills.map((skill, i) => (
                  <div key={skill.name} className="skill-row">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f0f3eb] font-mono text-xs font-bold text-[#7c9259]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-extrabold">{skill.name}</p>
                      <p className="mt-1 text-[10px] font-semibold text-muted">
                        {skill.level}
                      </p>
                    </div>
                    <ArrowUpRight size={15} className="text-[#a0aa92]" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="04 / How I work"
                title="Good work is a thoughtful process."
                note="From the first sketch to the final responsive check, I care about the small details that make a product feel complete."
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                [
                  Braces,
                  "01",
                  "Understand",
                  "Get clear on the goal, the people using it and the problem the interface needs to solve.",
                ],
                [
                  Layers3,
                  "02",
                  "Design & build",
                  "Shape a clean visual system and translate it into reusable, maintainable React components.",
                ],
                [
                  Smartphone,
                  "03",
                  "Refine everywhere",
                  "Test layouts across screen sizes, polish interactions and make the experience feel consistent.",
                ],
              ].map(([Icon, n, title, desc], i) => (
                <Reveal key={n} delay={i * 0.08}>
                  <div className="process-card">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#edf2e4]">
                        <Icon size={20} />
                      </span>
                      <span className="font-mono text-xs text-muted">{n}</span>
                    </div>
                    <h3 className="mt-8 text-xl font-extrabold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-8 sm:px-6">
          <Reveal>
            <div className="contact-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-20">
              <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-lime/20 blur-[90px]" />

              <div className="relative z-10 max-w-3xl">
                <p className="eyebrow !text-lime">
                  05 / Have a project in mind?
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-.055em] sm:text-6xl">
                  Let’s make something
                  <br />
                  <span className="text-lime">meaningful.</span>
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-8 text-white/60">
                  I’m open to frontend opportunities, collaborations and
                  conversations about building better digital experiences.
                </p>

                <a
                  href="mailto:harish.durai2004@gmail.com?subject=Let's%20work%20together"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-4 text-sm font-extrabold text-ink transition hover:-translate-y-1 hover:bg-[#d6ff86]"
                >
                  Say hello <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="relative z-10 mt-16 flex flex-col justify-between gap-7 border-t border-white/15 pt-7 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-extrabold">Harish D.</p>

                  <p className="mt-2 flex items-center gap-2 text-xs text-white/50">
                    <MapPin size={13} /> Puducherry, India
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <IconLink
                    href="mailto:harish.durai2004@gmail.com"
                    label="Email"
                  >
                    <Mail size={17} />
                  </IconLink>

                  <IconLink
                    href="https://github.com/HarishDuraikannan"
                    label="GitHub"
                  >
                    <Github size={17} />
                  </IconLink>

                  <IconLink
                    href="https://www.linkedin.com/in/harishduraikannan/"
                    label="LinkedIn"
                  >
                    <Linkedin size={17} />
                  </IconLink>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="px-4 py-7 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-[10px] font-semibold text-muted sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Harish D. Crafted with care.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            Back to top <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
