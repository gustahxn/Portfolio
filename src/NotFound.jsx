import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = ({ language }) => {
  const texts = {
    pt: {
      code: "erro 404",
      title: "Página não encontrada",
      desc: "O caminho que você está tentando acessar não existe.",
      button: "Voltar",
    },
    en: {
      code: "error 404",
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
        <span className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium rounded
          dark:bg-neutral-900 dark:text-neutral-400 dark:border dark:border-neutral-800 
          bg-neutral-100 text-neutral-500 border border-neutral-200">
          {t.code}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-mono 
          dark:text-neutral-100 text-neutral-900">
          {t.title}
        </h1>

        <p className="text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto
          dark:text-neutral-400 text-neutral-600">
          {t.desc}
        </p>

        <Link to="/">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-sm font-medium transition-all
            bg-neutral-900 text-white hover:bg-neutral-700
            dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-300">
            <ArrowLeft size={16} />
            {t.button}
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;