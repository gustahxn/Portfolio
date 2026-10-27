import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Phone,
  Send,
  User,
  AtSign,
  MessageSquare,
  FileDown,
  ChevronDown,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import NotFound from "./NotFound";

const translations = {
  pt: {
    name: "Gustavo da Silva",
    role: "Desenvolvedor Full Stack & Infraestrutura",
    bio: "Desenvolvedor Full Stack atuando também com infraestrutura de TI. Construo aplicações completas (Java, Go, PHP, React) e gerencio ambientes operacionais, com prática em automação Linux, redes, manutenção de hardware e suporte técnico avançado.",
    downloadBtn: "BAIXAR CV",
    resumePath: "/cvPT.pdf",
    projects: [
      {
        title: "Wallfinder",
        desc: "Ferramenta CLI para automação e gerenciamento de recursos no Linux.",
        tech: ["Bash", "Shell Script", "Linux", "CLI"],
        link: "https://github.com/gustahxn/wallfinder",
      },
      {
        title: "Escuta Aí",
        desc: "Similaridade musical, conectando o usuário aos seus serviços de streaming favoritos via APIs RESTful.",
        tech: ["Go", "React", "REST API", "Vercel", "Render"],
        link: "https://escuta-ai.vercel.app",
      },
      {
        title: "Edyx Editor",
        desc: "Editor de texto minimalista focado em performance e simplicidade, com layout A4 real e exportação PDF/DOCX.",
        tech: ["React", "Node.js", "TypeScript", "Tailwind"],
        link: "https://github.com/gustahxn/Edyx",
      },
      {
        title: "AquaFlux",
        desc: "Projeto experimental de UI em Next.js com shadcn/ui, focado em layout, navegação e UX.",
        tech: ["React", "Next.js", "Shadcn", "Recharts"],
        link: "https://aqua-flux-ui.vercel.app",
      },
      {
        title: "Luvit.fun",
        desc: "Plataforma social completa com arquitetura robusta de banco de dados relacional.",
        tech: ["PHP", "Laravel", "SQL", "JavaScript"],
        link: "https://github.com/gustahxn/Luvit2",
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
        company: "Prefeitura de São Paulo",
        role: "Projetista de Tecnologia",
        time: "Mai 2026 — Presente",
        desc: "Gerenciamento de projetos de TI, manutenção de hardware/redes e suporte técnico avançado com equipes externas.",
      },
      {
        company: "Facens",
        role: "Estagiário de Inovação e Tecnologia",
        time: "Fev 2026 — Mai 2026",
        desc: "Desenvolvimento de soluções tecnológicas, suporte de hardware e atuação ativa em rotinas de inovação acadêmica.",
      },
      {
        company: "Prefeitura Municipal de Sorocaba",
        role: "Estagiário de TI",
        time: "Set 2024 — Dez 2025",
        desc: "Criação de aplicações internas para gestão de dados, suporte técnico e configuração de sistemas operacionais.",
      },
    ],
    education: [
      {
        school: "FATEC Sorocaba",
        course: "Análise e Desenvolvimento de Sistemas - Superior",
        time: "2026 — 2027",
      },
      {
        school: "ETEC Fernando Prestes",
        course: "Ensino Médio com Técnico em Desenvolvimento de Sistemas",
        time: "2023 — 2025",
      },
    ],
    skills: [
      "Java",
      "Spring",
      "Go",
      "PHP",
      "Laravel",
      "React",
      "JavaScript",
      "SQL",
      "Bash/Shell Script",
      "Git",
    ],
    areas: [
      "Linux",
      "Redes",
      "AWS",
      "APIs REST",
      "Manutenção de Hardware",
      "Suporte Técnico Avançado",
      "Web Development",
    ],
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
    footer: "© 2026 Gustavo da Silva. Todos os direitos reservados.",
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
    role: "Full Stack Developer & Infrastructure",
    bio: "Full Stack developer working across web systems and IT infrastructure. Building complete applications (Java, Go, PHP, React) and managing operational environments, with experience in Linux automation, networking, hardware maintenance, and advanced technical support.",
    downloadBtn: "Download CV",
    resumePath: "/cvEN.pdf",
    projects: [
      {
        title: "Wallfinder",
        desc: "Command Line Interface (CLI) tool for automation and resource management in Linux environments.",
        tech: ["Bash", "Shell Script", "Linux", "CLI"],
        link: "https://github.com/gustahxn/wallfinder",
      },
      {
        title: "Escuta Aí",
        desc: "Musical similarity platform, connecting users to streaming services via cloud RESTful APIs.",
        tech: ["Go", "React", "REST API", "Vercel", "Render"],
        link: "https://escuta-ai.vercel.app",
      },
      {
        title: "Edyx Editor",
        desc: "Minimalist text editor focused on performance and simplicity, featuring real A4 layout and PDF/DOCX export.",
        tech: ["React", "Node.js", "TypeScript", "Tailwind"],
        link: "https://github.com/gustahxn/Edyx",
      },
      {
        title: "AquaFlux",
        desc: "Experimental UI project in Next.js with shadcn/ui, focused on layout, navigation, and UX.",
        tech: ["React", "Next.js", "Shadcn", "Recharts"],
        link: "https://aqua-flux-ui.vercel.app",
      },
      {
        title: "Luvit.fun",
        desc: "Complete social platform with robust relational database architecture.",
        tech: ["PHP", "Laravel", "SQL", "JavaScript"],
        link: "https://github.com/gustahxn/Luvit2",
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
        company: "São Paulo City Hall",
        role: "Technology Project Specialist",
        time: "May 2026 — Present",
        desc: "Management of IT projects, hardware/network maintenance, and advanced technical support alongside external teams.",
      },
      {
        company: "Facens",
        role: "Innovation and Technology Intern",
        time: "Feb 2026 — May 2026",
        desc: "Development of technological solutions, hardware support, and active participation in academic innovation routines.",
      },
      {
        company: "Sorocaba City Hall",
        role: "IT Intern",
        time: "Sep 2024 — Dec 2025",
        desc: "Creation of internal applications for data management, technical support, and operating system configuration.",
      },
    ],
    education: [
      {
        school: "FATEC Sorocaba (College of Technology)",
        course: "Associate Degree in Systems Analysis and Development",
        time: "2026 — 2027",
      },
      {
        school: "ETEC Fernando Prestes",
        course: "High School Integrated with Technical Degree in Systems Development",
        time: "2023 — 2025",
      },
    ],
    skills: [
      "Java",
      "Spring",
      "Go",
      "PHP",
      "Laravel",
      "React",
      "JavaScript",
      "SQL",
      "Bash/Shell Script",
      "Git",
    ],
    areas: [
      "Linux",
      "Networking",
      "AWS",
      "REST APIs",
      "Hardware Maintenance",
      "Advanced Tech Support",
      "Web Development",
    ],
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
    footer: "© 2026 Gustavo da Silva. All rights reserved.",
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


// terminal interativo de status
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
      className="mt-8 w-full max-w-sm p-4 rounded-xl font-mono text-xs select-none transition-colors 
        dark:bg-neutral-900/60 dark:border dark:border-neutral-800
        bg-white border-2 border-neutral-300/80 shadow-sm"
    >
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
      </div>
      <div className="space-y-1.5">
        <div className="flex dark:text-neutral-400 text-neutral-700">
          <span className="text-emerald-600 dark:text-emerald-400 mr-2">➜</span>
          <span className="text-neutral-800 dark:text-neutral-300 font-semibold">~/gustavo</span>
          <span className="text-neutral-500 dark:text-neutral-500 ml-1">
            git:(main)
          </span>
        </div>
        <div className="flex dark:text-neutral-200 text-neutral-900 font-medium">
          <span className="text-neutral-500 mr-2">$</span>
          npm run dev
        </div>

        <div className="pt-2 dark:border-t dark:border-neutral-800 border-t border-neutral-200 mt-2 space-y-1">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`flex justify-between ${
                i === lineIndex ? "opacity-100" : "opacity-35"
              } transition-opacity duration-300`}
            >
              <span className="dark:text-neutral-400 text-neutral-700 font-medium">
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

// cartao base reutilizavel
const Card = ({ children, className = "" }) => (
  <div
    className={`group relative transition-all duration-200 rounded-xl ${className}
      dark:bg-neutral-900/60 dark:border dark:border-neutral-800 dark:hover:border-neutral-700
      bg-white border-2 border-neutral-300/80 hover:border-neutral-400 shadow-[0_1px_3px_rgba(0,0,0,0.03)]`}
  >
    {children}
  </div>
);

// cartao de apresentacao de projeto
const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <Card className="p-4">
      <div className="flex justify-between items-start mb-1.5">
        <h4 className="font-semibold text-sm flex items-center gap-1.5 transition-colors dark:text-neutral-100 dark:group-hover:text-white text-neutral-950 group-hover:text-black">
          {project.title}
          <ArrowUpRight
            size={14}
            className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-neutral-500 dark:text-neutral-400"
          />
        </h4>
      </div>
      <p className="text-xs mb-3 leading-relaxed dark:text-neutral-400 text-neutral-700 font-normal">
        {project.desc}
      </p>
      <div className="flex gap-1.5 flex-wrap">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded-md transition-colors bg-neutral-800 text-neutral-300 border border-neutral-700/60"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  </a>
);

// formulario de contato com emailjs
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
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <Card className="mt-5 p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="group/input">
          <label className="block text-xs font-bold mb-1 dark:text-neutral-300 text-neutral-950">
            {texts.name}
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-2.5 text-neutral-400 group-focus-within/input:text-neutral-900 dark:group-focus-within/input:text-neutral-100 transition-colors"
              size={15}
            />
            <input
              type="text"
              name="name"
              required
              placeholder={texts.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded-lg text-xs outline-none transition-all
                dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 dark:focus:border-neutral-600
                bg-white text-neutral-950 border-2 border-neutral-300 focus:border-neutral-700 placeholder:text-neutral-400"
            />
          </div>
        </div>

        <div className="group/input">
          <label className="block text-xs font-bold mb-1 dark:text-neutral-300 text-neutral-950">
            {texts.email}
          </label>
          <div className="relative">
            <AtSign
              className="absolute left-3 top-2.5 text-neutral-400 group-focus-within/input:text-neutral-900 dark:group-focus-within/input:text-neutral-100 transition-colors"
              size={15}
            />
            <input
              type="email"
              name="email"
              required
              placeholder={texts.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded-lg text-xs outline-none transition-all
                dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 dark:focus:border-neutral-600
                bg-white text-neutral-950 border-2 border-neutral-300 focus:border-neutral-700 placeholder:text-neutral-400"
            />
          </div>
        </div>

        <div className="group/input">
          <label className="block text-xs font-bold mb-1 dark:text-neutral-300 text-neutral-950">
            {texts.message}
          </label>
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-2.5 text-neutral-400 group-focus-within/input:text-neutral-900 dark:group-focus-within/input:text-neutral-100 transition-colors"
              size={15}
            />
            <textarea
              name="message"
              required
              rows="4"
              placeholder={texts.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded-lg text-xs outline-none transition-all resize-none
                dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 dark:focus:border-neutral-600
                bg-white text-neutral-950 border-2 border-neutral-300 focus:border-neutral-700 placeholder:text-neutral-400"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer
          ${
            status === "success"
              ? "bg-emerald-600 text-white"
              : "bg-neutral-950 text-white hover:bg-neutral-800 border border-transparent" +
                " dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white"
          }`}
        >
          {status === "sending" ? (
            texts.sending
          ) : status === "success" ? (
            texts.success
          ) : (
            <>
              {texts.send} <Send size={13} />
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-xs text-rose-500 font-medium mt-2">{texts.error}</p>
        )}
      </form>
    </Card>
  );
};

// componente principal da pagina
const Portfolio = ({ data, language, setLanguage }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const initialProjects = data.projects.slice(0, 2);
  const drawerProjects = data.projects.slice(2);

  return (
    <>
      <div
        className="fixed top-4 right-4 lg:top-6 lg:right-6 z-50 flex items-center p-1 rounded-lg border-2 shadow-sm
          dark:bg-neutral-900 dark:border-neutral-700
          bg-white border-neutral-300"
      >
        {["pt", "en"].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
              language === lang
                ? "dark:bg-neutral-800 dark:text-white bg-neutral-950 text-white"
                : "dark:text-neutral-400 hover:dark:text-neutral-200 text-neutral-600 hover:text-black"
            }`}
          >
            <span className="uppercase">{lang}</span>
          </button>
        ))}
      </div>

      <div className="relative z-10 lg:flex lg:justify-between lg:gap-8 max-w-screen-xl mx-auto">
        <header className="pt-24 pb-10 px-6 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:px-12">
          <div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2 dark:text-neutral-100 text-neutral-950">
                {data.name}
              </h1>
              <h2 className="text-base lg:text-lg mb-6 dark:text-neutral-400 text-neutral-800 font-medium">
                {data.role}
              </h2>
              <p className="max-w-md leading-relaxed mb-6 text-xs sm:text-sm dark:text-neutral-400 text-neutral-800 font-normal">
                {data.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <nav className="flex items-center gap-2">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors rounded-lg border-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white dark:hover:border-neutral-700 border-neutral-300 bg-white text-neutral-800 hover:text-black hover:border-neutral-400"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors rounded-lg border-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white dark:hover:border-neutral-700 border-neutral-300 bg-white text-neutral-800 hover:text-black hover:border-neutral-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={links.email}
                    className="p-2 transition-colors rounded-lg border-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white dark:hover:border-neutral-700 border-neutral-300 bg-white text-neutral-800 hover:text-black hover:border-neutral-400"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={links.phone}
                    className="p-2 transition-colors rounded-lg border-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white dark:hover:border-neutral-700 border-neutral-300 bg-white text-neutral-800 hover:text-black hover:border-neutral-400"
                    aria-label="Phone"
                  >
                    <Phone size={18} />
                  </a>
                </nav>

                <a
                  href={data.resumePath}
                  download
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg border-2 transition-all cursor-pointer shadow-sm
                    dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950
                    border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-950 hover:text-white hover:border-neutral-950"
                >
                  <FileDown size={14} />
                  {data.downloadBtn}
                </a>
              </div>

              <StatusTerminal lines={data.terminal.lines} />
            </div>
          </div>
        </header>

        <main className="pt-0 px-6 pb-12 lg:w-1/2 lg:py-24 lg:px-12 space-y-16">
          <section className="pt-8 dark:border-t dark:border-neutral-800/80 border-t-2 border-[#e5dfd3]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xs font-bold uppercase tracking-widest dark:text-neutral-200 text-neutral-950">
                {data.sections.projects}
              </h3>
              <span className="text-xs dark:text-neutral-500 text-neutral-600">
                {showAllProjects
                  ? `${data.projects.length}/${data.projects.length}`
                  : `${initialProjects.length}/${data.projects.length}`}
              </span>
            </div>

            <div className="space-y-3">
              {initialProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  showAllProjects
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}
              >
                <div className="overflow-hidden space-y-3">
                  {drawerProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </div>

              {drawerProjects.length > 0 && (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    aria-label={showAllProjects ? "Recolher projetos" : "Expandir projetos"}
                    title={showAllProjects ? (language === "pt" ? "Recolher" : "Collapse") : (language === "pt" ? `Ver mais ${drawerProjects.length} projetos` : `View ${drawerProjects.length} more`)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 transition-all cursor-pointer shadow-sm
                      dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-white
                      bg-white border-neutral-300 text-neutral-800 hover:border-neutral-500 hover:text-black"
                  >
                    <span className="text-xs font-medium">
                      {showAllProjects ? "−" : `+${drawerProjects.length}`}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ease-out ${
                        showAllProjects ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              )}
            </div>
          </section>

          <section className="pt-8 dark:border-t dark:border-neutral-800/80 border-t-2 border-[#e5dfd3]">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 dark:text-neutral-200 text-neutral-950">
              {data.sections.experience}
            </h3>
            <div className="space-y-7">
              {data.experience.map((xp, i) => (
                <div key={i} className="grid grid-cols-[105px_1fr] sm:grid-cols-[125px_1fr] gap-3">
                  <span className="text-xs dark:text-neutral-500 text-neutral-600 mt-0.5">
                    {xp.time}
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm dark:text-neutral-100 text-neutral-950">
                      {xp.role}
                    </h4>
                    <p className="text-xs mb-1.5 dark:text-neutral-400 text-neutral-800 font-medium">
                      {xp.company}
                    </p>
                    <p className="text-xs leading-relaxed dark:text-neutral-400 text-neutral-700 font-normal">
                      {xp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 dark:border-t dark:border-neutral-800/80 border-t-2 border-[#e5dfd3]">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 dark:text-neutral-200 text-neutral-950">
              {data.sections.skills}
            </h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-default bg-neutral-800 text-neutral-200 border border-neutral-700/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.areas.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-default bg-neutral-800 text-neutral-200 border border-neutral-700/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-8 dark:border-t dark:border-neutral-800/80 border-t-2 border-[#e5dfd3]">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5 dark:text-neutral-200 text-neutral-950">
              {data.sections.education}
            </h3>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="flex justify-between items-baseline text-xs gap-3">
                  <div>
                    <div className="font-semibold text-sm dark:text-neutral-100 text-neutral-950">
                      {edu.school}
                    </div>
                    <div className="dark:text-neutral-400 text-neutral-700 font-normal mt-0.5">
                      {edu.course}
                    </div>
                  </div>
                  <div className="text-xs dark:text-neutral-500 text-neutral-600 shrink-0">
                    {edu.time}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 dark:border-t dark:border-neutral-800/80 border-t-2 border-[#e5dfd3]">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 dark:text-neutral-200 text-neutral-950">
              {data.sections.contact}
            </h3>
            <p className="text-xs dark:text-neutral-400 text-neutral-700 font-normal">
              {language === "pt"
                ? "Tem um projeto em mente, deseja me contratar ou quer trocar uma ideia? Me mande uma mensagem!"
                : "Have a project in mind, want to hire me or just talk some? Reach out to me!"}
            </p>
            <ContactForm texts={data.contactForm} />
          </section>

        </main>
      </div>
    </>
  );
};

// recupera idioma inicial
const getInitialLanguage = () => {
  if (typeof window !== "undefined" && localStorage.getItem("language")) {
    return localStorage.getItem("language");
  }
  return "pt";
};

// componente raiz
function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const data = translations[language];

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-neutral-800 selection:text-white transition-colors bg-black text-neutral-300">
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio
                data={data}
                language={language}
                setLanguage={setLanguage}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFound language={language} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

