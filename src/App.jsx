import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Phone,
  Sun,
  Moon,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const translations = {
  pt: {
    name: "Gustavo da Silva",
    role: "Desenvolvedor Full-Stack - 18 anos",
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
      projects: "Projetos",
      experience: "Experiência",
      skills: "Habilidades",
      education: "Formação Acadêmica",
      contact: "Contato",
    },
    contactForm: {
      name: "Seu Nome",
      namePlaceholder: "Como devo te chamar?",
      email: "Seu E-mail",
      emailPlaceholder: "exemplo@email.com",
      message: "Sua Mensagem",
      messagePlaceholder: "Olá! Gostaria de falar sobre...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar. Tente novamente.",
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
    role: "Full-Stack Developer - 18 y",
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
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    contactForm: {
      name: "Your Name",
      namePlaceholder: "What should I call you?",
      email: "Your Email",
      emailPlaceholder: "example@email.com",
      message: "Your Message",
      messagePlaceholder: "Hi! I'd like to talk about...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send. Please try again.",
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
      <div
        className="absolute inset-0 
          dark:bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] dark:bg-[size:16px_16px] 
          bg-[linear-gradient(to_right,#00000016_1px,transparent_1px),linear-gradient(to_bottom,#00000016_1px,transparent_1px)] bg-[size:16px_16px]"
      />
      <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-black/80 dark:via-black/60 dark:to-transparent bg-gradient-to-t from-white/90 via-white/70 to-transparent" />
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
    <div
      className="mt-12 w-full max-w-sm p-5 rounded-lg font-mono text-sm backdrop-blur-sm select-none transition-colors 
        dark:bg-neutral-900/40 dark:border dark:border-neutral-800 dark:hover:border-neutral-700
        bg-neutral-100/70 border border-neutral-300 hover:border-neutral-500"
    >
      <div className="flex gap-1.5 mb-4 opacity-100">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-amber-500" />
        <div className="w-3 h-3 rounded-full bg-emerald-500" />
      </div>
      <div className="space-y-2">
        <div className="flex dark:text-neutral-400 text-neutral-600">
          <span className="text-emerald-500 mr-2">➜</span>
          <span className="text-cyan-400">~/gustavo</span>
          <span className="text-purple-400 ml-1">git:(main)</span>
        </div>
        <div className="flex dark:text-neutral-300 text-neutral-800">
          <span className="text-yellow-400 mr-2">$</span>
          npm run dev
        </div>

        <div className="pt-2 dark:border-t dark:border-neutral-800/50 border-t border-neutral-300/50 mt-2 space-y-1.5">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`flex justify-between ${
                i === lineIndex ? "opacity-100" : "opacity-30"
              } transition-opacity duration-300`}
            >
              <span className="dark:text-neutral-400 text-neutral-600">
                {line.cmd}
              </span>
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
    className={`group relative p-6 transition-all duration-300 rounded-lg ${className}
      dark:bg-neutral-900/40 dark:border dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900/60
      bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-lg`}
  >
    {children}
  </div>
);

const ContactForm = ({ texts }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = "service_7bxnaqk";
    const templateID = "template_0ks2qhh";
    const publicKey = "IwhtsYH-k64BCJ5bR";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: "Contato do Portfólio",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("error");
      });
  };

  return (
    <Card className="mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="group/input">
          <label className="block text-xs font-medium mb-1 dark:text-neutral-400 text-neutral-600">
            {texts.name}
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-2.5 text-neutral-400 group-focus-within/input:text-emerald-500 transition-colors"
              size={16}
            />
            <input
              type="text"
              name="name"
              required
              placeholder={texts.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded text-sm outline-none transition-all
                dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-1 dark:focus:ring-neutral-500
                bg-neutral-50 text-neutral-800 border border-neutral-300 focus:border-neutral-500"
            />
          </div>
        </div>

        <div className="group/input">
          <label className="block text-xs font-medium mb-1 dark:text-neutral-400 text-neutral-600">
            {texts.email}
          </label>
          <div className="relative">
            <AtSign
              className="absolute left-3 top-2.5 text-neutral-400 group-focus-within/input:text-emerald-500 transition-colors"
              size={16}
            />
            <input
              type="email"
              name="email"
              required
              placeholder={texts.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded text-sm outline-none transition-all
                dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-1 dark:focus:ring-neutral-500
                bg-neutral-50 text-neutral-800 border border-neutral-300 focus:border-neutral-500"
            />
          </div>
        </div>

        <div className="group/input">
          <label className="block text-xs font-medium mb-1 dark:text-neutral-400 text-neutral-600">
            {texts.message}
          </label>
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-3 text-neutral-400 group-focus-within/input:text-emerald-500 transition-colors"
              size={16}
            />
            <textarea
              name="message"
              required
              rows="4"
              placeholder={texts.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded text-sm outline-none transition-all resize-none
                dark:bg-neutral-800 dark:text-neutral-200 dark:focus:ring-1 dark:focus:ring-neutral-500
                bg-neutral-50 text-neutral-800 border border-neutral-300 focus:border-neutral-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all
          ${
            status === "success"
              ? "bg-emerald-500 text-white"
              : 
                "border border-transparent bg-neutral-800 text-white hover:bg-neutral-200 hover:border-black hover:text-black" +
                " dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
          }`}
              >
          {status === "sending" ? (
            texts.sending
          ) : status === "success" ? (
            texts.success
          ) : (
            <>
              {texts.send} <Send size={14} />
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-xs text-rose-500 mt-2">{texts.error}</p>
        )}
      </form>
    </Card>
  );
};

const getInitialTheme = () => {
  if (typeof window !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return "dark";
};

function App() {
  const [language, setLanguage] = useState("pt");
  const [theme, setTheme] = useState(getInitialTheme);
  const data = translations[language];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const currentThemeIcon =
    theme === "dark" ? <Sun size={18} /> : <Moon size={18} />;

  return (
    <div
      className="min-h-screen font-sans selection:bg-opacity-50 transition-colors 
        dark:bg-black dark:text-neutral-400 dark:selection:bg-neutral-800 dark:selection:text-white
        bg-white text-neutral-600 selection:bg-neutral-200 selection:text-black"
    >
      <TechBackground />

      <motion.button
        onClick={toggleTheme}
        className="fixed top-4 left-4 lg:top-6 lg:left-6 z-50 p-2.5 rounded-full backdrop-blur-sm transition-all shadow-lg
          dark:bg-neutral-800 dark:border-2 dark:border-neutral-600 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:border-neutral-500
          bg-white border-2 border-neutral-300 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-400"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {currentThemeIcon}
      </motion.button>

      <div
        className="fixed top-4 right-4 lg:top-6 lg:right-6 z-50 flex items-center gap-0 backdrop-blur-sm rounded-full p-1 shadow-lg
          dark:bg-neutral-800 dark:border-2 dark:border-neutral-600
          bg-white border-2 border-neutral-300"
      >
        <button
          onClick={() => setLanguage("pt")}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            language === "pt"
              ? "dark:text-white text-black"
              : "dark:text-neutral-500 hover:dark:text-neutral-300 text-neutral-500 hover:text-neutral-700"
          }`}
        >
          {language === "pt" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-full dark:bg-neutral-700 bg-neutral-300"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">PT</span>
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            language === "en"
              ? "dark:text-white text-black"
              : "dark:text-neutral-500 hover:dark:text-neutral-300 text-neutral-500 hover:text-neutral-700"
          }`}
        >
          {language === "en" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-full dark:bg-neutral-700 bg-neutral-300"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </div>

      <div className="relative z-10 lg:flex lg:justify-between lg:gap-4 max-w-screen-xl mx-auto">
        <header className="pt-28 pb-12 px-6 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:mt-0 lg:py-24 lg:px-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 font-mono dark:text-neutral-100 text-neutral-900">
                {data.name}
              </h1>
              <h2 className="text-xl font-medium mb-6 dark:text-neutral-100 text-neutral-800">
                {data.role}
              </h2>
              <p className="max-w-sm leading-relaxed mb-8 whitespace-pre-line dark:text-neutral-400 text-neutral-600">
                {data.bio}
              </p>

              <nav className="flex items-center gap-5">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900"
                >
                  <Github size={22} />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={links.email}
                  className="transition-colors dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900"
                >
                  <Mail size={22} />
                </a>
                <a
                  href={links.phone}
                  className="transition-colors dark:text-neutral-400 dark:hover:text-white text-neutral-500 hover:text-neutral-900"
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
          <section className="pt-8 dark:border-t-2 dark:border-neutral-800 border-t-2 border-neutral-300">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 dark:text-neutral-200 text-neutral-700">
              {data.sections.projects}
            </h3>
            <div className="grid gap-6">
              {data.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg flex items-center gap-2 transition-colors dark:text-neutral-100 dark:group-hover:text-white text-neutral-800 group-hover:text-black">
                          {project.title}
                          <ArrowUpRight
                            size={16}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </h3>
                      </div>
                      <p className="text-sm mb-4 leading-relaxed dark:text-neutral-400 text-neutral-600">
                        {project.desc}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium px-3 py-1 rounded-full transition-colors dark:bg-neutral-800 dark:text-neutral-300 dark:border dark:border-neutral-700/50 dark:group-hover:border-neutral-500 bg-neutral-100 text-neutral-600 border border-neutral-300 group-hover:border-neutral-500"
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

          <section className="pt-8 dark:border-t-2 dark:border-neutral-800 border-t-2 border-neutral-300">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 dark:text-neutral-200 text-neutral-700">
              {data.sections.experience}
            </h3>
            <div className="space-y-10">
              {data.experience.map((xp, i) => (
                <div key={i} className="group grid grid-cols-[1fr_3fr] gap-4">
                  <span className="text-xs font-mono dark:text-neutral-500 text-neutral-400 mt-1">
                    {xp.time}
                  </span>
                  <div>
                    <h4 className="font-medium transition-colors dark:text-neutral-100 dark:group-hover:text-white text-neutral-800 group-hover:text-black">
                      {xp.role}
                    </h4>
                    <p className="text-sm mb-2 dark:text-neutral-500 text-neutral-400">
                      {xp.company}
                    </p>
                    <p className="text-sm leading-relaxed dark:text-neutral-400 text-neutral-600">
                      {xp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 dark:border-t-2 dark:border-neutral-800 border-t-2 border-neutral-300">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 dark:text-neutral-200 text-neutral-700">
              {data.sections.skills}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {data.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-default dark:text-neutral-300 dark:bg-neutral-900 dark:border dark:border-neutral-800 dark:hover:border-neutral-500 text-neutral-700 bg-neutral-100 border border-neutral-300 hover:border-neutral-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {data.areas.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-default dark:text-neutral-300 dark:bg-neutral-900 dark:border dark:border-neutral-800 dark:hover:border-neutral-500 text-neutral-700 bg-neutral-100 border border-neutral-300 hover:border-neutral-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-8 dark:border-t-2 dark:border-neutral-800 border-t-2 border-neutral-300">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 dark:text-neutral-200 text-neutral-700">
              {data.sections.education}
            </h3>
            <div className="grid gap-4">
              {data.education.map((edu, i) => (
                <div key={i} className="flex justify-between items-end text-sm">
                  <div>
                    <div className="font-medium dark:text-neutral-100 text-neutral-800">
                      {edu.school}
                    </div>
                    <div className="dark:text-neutral-500 text-neutral-600">
                      {edu.course}
                    </div>
                  </div>
                  <div className="font-mono text-xs dark:text-neutral-600 text-neutral-400">
                    {edu.time}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 dark:border-t-2 dark:border-neutral-800 border-t-2 border-neutral-300">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 dark:text-neutral-200 text-neutral-700">
              {data.sections.contact}
            </h3>
            <p className="mb-6 text-sm dark:text-neutral-400 text-neutral-600">
              {language === "pt"
                ? "Tem um projeto em mente, deseja me contratar ou quer alinhas umas ideias? Entre em contato comigo!"
                : "Have a project in mind, want to hire me or just talk some? Contact me!"}
            </p>
            <ContactForm texts={data.contactForm} />
          </section>

          <footer className="text-xs pt-12 dark:text-neutral-400 text-neutral-500">
            <p>{data.footer}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
