import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// pagina de erro 404
const NotFound = ({ language }) => {
  const texts = {
    pt: {
      title: "Página não encontrada",
      desc: "O caminho que você está tentando acessar não existe.",
      button: "Voltar",
    },
    en: {
      title: "Page not found",
      desc: "The path you are trying to access does not exist.",
      button: "Go Back",
    },
  };

  const t = texts[language];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-mono text-neutral-100">
          {t.title}
        </h1>

        <p className="text-base leading-relaxed mb-10 max-w-md mx-auto text-neutral-400">
          {t.desc}
        </p>

        <Link to="/">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all bg-neutral-900 text-neutral-100 border border-neutral-800 hover:bg-neutral-800 hover:text-white">
            <ArrowLeft size={16} />
            {t.button}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;