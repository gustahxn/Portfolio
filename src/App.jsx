import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Phone } from "lucide-react";

const translations = {
  pt: {
    name: "Gustavo da Silva",
    role: "Desenvolvedor Full-Stack",
    bio: "Foco em criar experiências digitais sólidas.\nEm busca de oportunidades como Estagiário ou Junior, na área de Desenvolvimento/TI",
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
        company: "Prefeitura Municipal de Sorocaba",
        role: "Estagiário de TI",
        time: "2024 — 2025",
        desc: "Atuação direta no suporte técnico, responsável pela configuração de estações de trabalho, manutenção preventiva e auxílio na gestão de sistemas internos, garantindo a disponibilidade dos serviços municipais.",
      },
    ],
    education: [
      {
        school: "FATEC Sorocaba",
        course: "Análise e Desenvolvimento de Sistemas - Superior",
        time: "2026 — 2028",
      },
      {
        school: "ETEC Fernando Prestes",
        course: "Desenvolvimento de Sistemas - Técnico",
        time: "2023 — 2025",
      },
    ],
    skills: ["PHP", "Laravel", "React", "Node.js", "SQL", "Git", "C#"],
    areas: ["Web Development", "Banco de Dados", "Hardware", "Suporte TI"],
    sections: {
      experience: "Experiência",
      skills: "Habilidades",
      education: "Formação Acadêmica",
    },
    footer: "Est 2007, resolvendo problemas.",
    terminal: {
      lines: [
        { cmd: "café", status: "Concluído", color: "text-emerald-400" },
        { cmd: "bugs", status: "Corrigindo...", color: "text-amber-400" },
        { cmd: "produção", status: "Enviando...", color: "text-blue-400" },
        { cmd: "sono", status: "Erro 404", color: "text-rose-500" },
      ],
    },
  },
  en: {
    name: "Gustavo da Silva",
    role: "Full-Stack Developer",
    bio: "Focused on creating solid digital experiences.\nSeeking opportunities as an Intern or Junior in Development/IT",
    projects: [
      {
        title: "Luvit.fun",
        desc: "Complete social platform with robust database architecture.",
        tech: ["PHP", "SQL", "JavaScript"],
        link: "https://www.luvit.fun",
      },
      {
        title: "SoroFitness",
        desc: "Modern application for health and body metrics calculation.",
        tech: ["React", "Tailwind", "Vercel"],
        link: "https://calcimc-gray.vercel.app",
      },
    ],
    experience: [
      {
        company: "Sorocaba City Hall",
        role: "IT Intern",
        time: "2024 — 2025",
        desc: "Direct work in technical support, responsible for workstation configuration, preventive maintenance, and assistance in managing internal systems, ensuring the availability of municipal services.",
      },
    ],
    education: [
      {
        school: "FATEC Sorocaba",
        course: "Systems Analysis and Development - Higher Education",
        time: "2026 — 2028",
      },
      {
        school: "ETEC Fernando Prestes",
        course: "Systems Development - Technical",
        time: "2023 — 2025",
      },
    ],
    skills: ["PHP", "Laravel", "React", "Node.js", "SQL", "Git", "C#"],
    areas: ["Web Development", "Database", "Hardware", "IT Support"],
    sections: {
      experience: "Experience",
      skills: "Skills",
      education: "Education",
    },
    footer: "Est 2007, solving problems.",
    terminal: {
      lines: [
        { cmd: "coffee", status: "Complete", color: "text-emerald-400" },
        { cmd: "bugs", status: "Fixing...", color: "text-amber-400" },
        { cmd: "production", status: "Deploying...", color: "text-blue-400" },
        { cmd: "sleep", status: "Error 404", color: "text-rose-500" },
      ],
    },
  },
};

const links = {
  github: "https://github.com/gustahxn",
  linkedin: "https://www.linkedin.com/in/gustavo-oliveiradasilva",
  email: "mailto:gusta2007i@gmail.com",
  phone: "tel:+5515991616085",
};

const TechBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
};

const StatusTerminal = ({ lines }) => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % lines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="mt-12 w-full max-w-sm p-5 rounded-lg bg-neutral-900/40 border border-neutral-800 font-mono text-sm backdrop-blur-sm select-none hover:border-neutral-700 transition-colors">
      <div className="flex gap-1.5 mb-4 opacity-100">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-amber-500" />
        <div className="w-3 h-3 rounded-full bg-emerald-500" />
      </div>
      <div className="space-y-2">
        <div className="flex text-neutral-400">
          <span className="text-emerald-500 mr-2">➜</span>
          <span className="text-cyan-400">~/gustavo</span>
          <span className="text-purple-400 ml-1">git:(main)</span>
        </div>
        <div className="flex text-neutral-300">
          <span className="text-yellow-400 mr-2">$</span>
          npm run dev
        </div>

        <div className="pt-2 border-t border-neutral-800/50 mt-2 space-y-1.5">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`flex justify-between ${
                i === lineIndex ? "opacity-100" : "opacity-30"
              } transition-opacity duration-300`}
            >
              <span className="text-neutral-400">{line.cmd}</span>
              <span className={line.color}>{line.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`group relative p-6 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900/60 transition-all duration-300 rounded-lg ${className}`}
  >
    {children}
  </div>
);

function App() {
  const [language, setLanguage] = useState("pt");
  const data = translations[language];

  return (
    <div className="min-h-screen bg-black text-neutral-400 font-sans selection:bg-neutral-800 selection:text-white">
      <TechBackground />

      <div className="fixed top-6 right-6 z-50 flex items-center gap-0 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-full p-1">
        <button
          onClick={() => setLanguage("pt")}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            language === "pt"
              ? "text-white"
              : "text-neutral-500 hover:text-neutral-300"
          }`}
        >
          {language === "pt" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-neutral-700 rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">PT</span>
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            language === "en"
              ? "text-white"
              : "text-neutral-500 hover:text-neutral-300"
          }`}
        >
          {language === "en" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-neutral-700 rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </div>

      <div className="relative z-10 lg:flex lg:justify-between lg:gap-4 max-w-screen-xl mx-auto">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between py-12 px-6 lg:py-24 lg:px-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight mb-3 font-['Space_Grotesk']">
                {data.name}
              </h1>
              <h2 className="text-xl text-neutral-100 font-medium mb-6">
                {data.role}
              </h2>
              <p className="max-w-sm leading-relaxed text-neutral-400 mb-8 whitespace-pre-line">
                {data.bio}
              </p>

              <nav className="flex items-center gap-5">
                
                  href={links.github}
                  target="_blank"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Github size={22} />
                </a>
                
                  href={links.linkedin}
                  target="_blank"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                
                  href={links.email}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail size={22} />
                </a>
                
                  href={links.phone}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Phone size={22} />
                </a>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <StatusTerminal lines={data.terminal.lines} />
              </motion.div>
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
                  
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <Card>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-neutral-100 font-semibold text-lg flex items-center gap-2 group-hover:text-white transition-colors">
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
                            className="text-xs font-medium bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full border border-neutral-700/50 group-hover:border-neutral-500"
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

          <section className="pt-8 border-t border-neutral-900">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-200 mb-8">
              {data.sections.experience}
            </h3>
            <div className="space-y-10">
              {data.experience.map((xp, i) => (
                <div key={i} className="group grid grid-cols-[1fr_3fr] gap-4">
                  <span className="text-xs font-mono text-neutral-500 mt-1">
                    {xp.time}
                  </span>
                  <div>
                    <h4 className="text-neutral-100 font-medium group-hover:text-white transition-colors">
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

          <section className="pt-8 border-t border-neutral-900">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-200 mb-8">
              {data.sections.skills}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {data.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-500 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {data.areas.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-500 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-neutral-900">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-200 mb-8">
              {data.sections.education}
            </h3>
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

          <footer className="text-xs text-neutral-600 pt-12">
            <p>{data.footer}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
