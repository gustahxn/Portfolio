import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const data = {
  name: "Gustavo Henrique",
  role: "Desenvolvedor Full Stack",
  bio: "Foco em criar experiências digitais sólidas. Especialista em resolver problemas complexos com PHP, React e Node.js.",
  links: {
    github: "https://github.com/gustahxn",
    linkedin: "https://www.linkedin.com/in/gustavo-oliveiradasilva",
    email: "mailto:gusta2007i@gmail.com",
  },
  projects: [
    {
      title: "Luvit.fun",
      desc: "Plataforma social completa com arquitetura robusta de banco de dados.",
      tech: ["PHP", "SQL", "JavaScript"],
      link: "https://www.luvit.fun",
    },
    {
      title: "SoroFitness",
      desc: "Aplicação moderna para saúde e cálculo de métricas corporais.",
      tech: ["React", "Tailwind", "Vercel"],
      link: "https://calcimc-gray.vercel.app",
    },
  ],
  experience: [
    {
      company: "Prefeitura de Sorocaba",
      role: "Estagiário de TI",
      time: "2024 — 2025",
      desc: "Suporte Nível 1, manutenção de hardware e gestão de sistemas internos.",
    },
  ],
  education: [
    { school: "FATEC Sorocaba", course: "ADS", time: "2026 — 2028" },
    {
      school: "ETEC Fernando Prestes",
      course: "Técnico DS",
      time: "2023 — 2025",
    },
  ],
  skills: ["PHP", "Laravel", "React", "Node.js", "SQL", "Git", "C#"],
};

const TechBackground = () => {
  const particles = useMemo(() => {
    const symbols = ["0", "1", "{}", "</>", "&&", ";", "[]", "if", "=>"];
    return [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 20,
      delay: Math.random() * 5,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-emerald-500/10 font-mono font-bold select-none"
          initial={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0,
          }}
          animate={{
            top: [`${p.y}%`, `${p.y - 20}%`],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
          style={{ fontSize: "1rem" }}
        >
          {p.symbol}
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`group relative p-6 bg-neutral-900/40 border border-neutral-800 hover:border-emerald-900/50 hover:bg-neutral-900/60 transition-all duration-300 rounded-lg ${className}`}
  >
    {children}
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-400 font-sans selection:bg-emerald-900/30 selection:text-emerald-200">
      <TechBackground />

      <div className="relative z-10 lg:flex lg:justify-between lg:gap-4 max-w-screen-xl mx-auto">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between py-12 px-6 lg:py-24 lg:px-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight mb-3">
                {data.name}
              </h1>
              <h2 className="text-xl text-neutral-100 font-medium mb-6">
                {data.role}
              </h2>
              <p className="max-w-sm leading-relaxed text-neutral-400 mb-8">
                {data.bio}
              </p>

              <nav className="flex items-center gap-5">
                <a
                  href={data.links.github}
                  target="_blank"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href={data.links.linkedin}
                  target="_blank"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={data.links.email}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail size={22} />
                </a>
              </nav>
            </motion.div>
          </div>
        </header>

        <main className="pt-0 px-6 pb-12 lg:w-1/2 lg:py-24 lg:px-12 space-y-24">
          <section>
            <div className="grid gap-6">
              {data.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <Card>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-neutral-100 font-semibold text-lg flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                          <ArrowUpRight
                            size={16}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </h3>
                      </div>
                      <p className="text-sm mb-4 leading-relaxed text-neutral-400">
                        {project.desc}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full border border-neutral-700/50 group-hover:border-emerald-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-200 mb-8">
              Experiência
            </h3>
            <div className="space-y-10">
              {data.experience.map((xp, i) => (
                <div key={i} className="group grid grid-cols-[1fr_3fr] gap-4">
                  <span className="text-xs font-mono text-neutral-500 mt-1">
                    {xp.time}
                  </span>
                  <div>
                    <h4 className="text-neutral-100 font-medium group-hover:text-emerald-400 transition-colors">
                      {xp.role}
                    </h4>
                    <p className="text-sm text-neutral-500 mb-2">
                      {xp.company}
                    </p>
                    <p className="text-sm leading-relaxed">{xp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded hover:border-emerald-500/30 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="pt-8 border-t border-neutral-900">
            <div className="grid gap-4">
              {data.education.map((edu, i) => (
                <div key={i} className="flex justify-between items-end text-sm">
                  <div>
                    <div className="text-neutral-100 font-medium">
                      {edu.school}
                    </div>
                    <div className="text-neutral-500">{edu.course}</div>
                  </div>
                  <div className="text-neutral-600 font-mono text-xs">
                    {edu.time}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
