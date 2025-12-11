"use client";

import { circOut, motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";

const WHATSAPP_URL =
  "https://wa.me/5548991628079?text=Gostaria%20de%20informa%C3%A7%C3%B5es..";

const trackWhatsAppClick = () => {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void })
    .gtag;
  gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: "whatsapp_cta",
  });
};

const handleWhatsAppClick = () => {
  trackWhatsAppClick();
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: circOut },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const promiseBand = [
  { title: "Seu projeto sob medida", text: "Design, corte e ferragens alinhados ao seu espaço." },
  { title: "Atendimento personalizado", text: "Briefing rápido, retorno em até 48h com proposta." },
  { title: "Oferta por tempo limitado", text: "Condições especiais para novos projetos na região." },
];

const featureCards = [
  { title: "Planejamento e layout", text: "Medição, fluxo e ergonomia pensados em cada peça." },
  { title: "Escolha de materiais", text: "MDF premium, ferragens de alta performance e acabamentos atuais." },
  { title: "Entrega no prazo", text: "Cronograma claro, sem surpresas, com montagem assistida." },
  { title: "Proteção e cuidado", text: "Ambiente protegido, piso e objetos preservados durante a montagem." },
  { title: "Referências reais", text: "Portfólio em São José e região, com clientes satisfeitos." },
  { title: "Garantia de 5 anos", text: "Suporte pós-instalação e manutenção orientada." },
];

const portfolioItems = [
  { label: "Cozinhas com ilha e torre quente" },
  { label: "Closets e dormitórios completos" },
  { label: "Home offices funcionais" },
  { label: "Banheiros e lavanderias otimizados" },
  { label: "Painéis de living e TV" },
  { label: "Ambientes compactos bem aproveitados" },
];

const testimonials = [
  {
    name: "Marina",
    location: "Kobrasol",
    rating: 5,
    quote:
      "Atenderam prazos, protegeram o piso na montagem e o resultado ficou impecável.",
  },
  {
    name: "João e Carla",
    location: "Campinas",
    rating: 5,
    quote:
      "Do 3D à entrega, tudo alinhado. Ferragens silenciosas e acabamentos sem emendas aparentes.",
  },
  {
    name: "Bruna",
    location: "São José",
    rating: 5,
    quote:
      "Equipe atenciosa, proposta clara e limpeza completa ao final. Recomendamos.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <motion.section
        className={styles.hero}
        id="inicio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeInUp}
      >
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroCopy}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.eyebrow}>Bem-vindo</p>
            <h1>
              Mais do que espaços que fazem sentido, entregamos ambientes que
              fazem sentir.
            </h1>
            <p className={styles.heroLead}>
              Móveis planejados sob medida para o seu estilo. Projetos completos,
              acabamento premium e montagem profissional em São José e região.
            </p>
            <div className={styles.heroActions}>
              <motion.a
                className={styles.primaryCta}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Falar no WhatsApp
              </motion.a>
              <motion.a
                className={styles.secondaryCta}
                href="#portfolio"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver portfólio
              </motion.a>
            </div>
            <ul className={styles.heroPoints}>
              <li>Projeto sob medida com aprovação rápida.</li>
              <li>Proteção total do ambiente na montagem.</li>
              <li>Garantia de 5 anos em cada entrega.</li>
            </ul>
          </motion.div>
          <motion.div
            className={styles.heroLogoCard}
            variants={fadeIn}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.logoWrapper}>
              <Image
                src="/logo.png"
                alt="Cena7 Móveis Personalizados"
                width={280}
                height={280}
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.promiseBand}
        aria-label="Vantagens principais"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerChildren}
      >
        <div className={styles.promiseInner}>
          {promiseBand.map((item) => (
            <motion.div
              key={item.title}
              className={styles.promiseItem}
              variants={fadeInUp}
            >
              <p className={styles.promiseTitle}>{item.title}</p>
              <p className={styles.promiseText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.features}
        id="diferenciais"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Compromisso com prazo e qualidade</p>
          <h2>Entrega no tempo certo, com qualidade e vantagens reais</h2>
        </header>
        <div className={styles.featureGrid}>
          {featureCards.map((card) => (
            <motion.article
              key={card.title}
              className={styles.featureCard}
              variants={fadeInUp}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.portfolio}
        id="portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Portfólio</p>
          <h2>Esses não são apenas móveis, são sonhos que realizamos</h2>
        </header>
        <div className={styles.portfolioShowcase}>
          {portfolioItems.map((item) => (
            <motion.div
              key={item.label}
              className={styles.portfolioCard}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
            >
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
        <motion.a
          className={styles.primaryCta}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Quero um móvel de qualidade
        </motion.a>
      </motion.section>

      <motion.section
        className={styles.about}
        id="sobre"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <div className={styles.aboutText}>
          <p className={styles.eyebrow}>Sobre nós</p>
          <h2>Da nossa casa para sua casa</h2>
          <p>
            Começamos com a paixão de transformar madeira em ambientes
            personalizados. Hoje entregamos cozinhas, dormitórios, closets,
            banheiros e home offices feitos sob medida, unindo técnica, prazo e
            cuidado.
          </p>
          <p>
            Localizados em São José, atendemos toda a Grande Florianópolis com
            atendimento próximo, montagem profissional e garantia estendida.
          </p>
          <div className={styles.heroActions}>
            <motion.a
              className={styles.primaryCta}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Quero falar com um especialista
            </motion.a>
          </div>
        </div>
        <motion.div
          className={styles.aboutMedia}
          aria-hidden
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.photoPlaceholder}>Espaço para fotos reais</div>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.testimonials}
        id="depoimentos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Depoimentos</p>
          <h2>O que dizem nossos clientes</h2>
        </header>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              className={styles.testimonialCard}
              variants={fadeInUp}
            >
              <div className={styles.testimonialHead}>
                <div>
                  <p className={styles.testimonialName}>{item.name}</p>
                  <p className={styles.testimonialLocation}>{item.location}</p>
                </div>
                <div className={styles.testimonialRating}>
                  {"★".repeat(item.rating)}
                </div>
              </div>
              <p className={styles.testimonialQuote}>&quot;{item.quote}&quot;</p>
            </motion.article>
          ))}
        </div>
        <div className={styles.testimonialActions}>
          <motion.a
            className={styles.secondaryCta}
            href="#contato"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver todas as avaliações
          </motion.a>
        </div>
      </motion.section>

      <motion.section
        className={styles.finalCta}
        id="contato"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeInUp}
      >
        <div className={styles.finalCopy}>
          <h2>Pronto para transformar seu ambiente?</h2>
          <p>
            Vamos criar um projeto sob medida para seu espaço, com condições
            claras e entrega combinada.
          </p>
          <div className={styles.heroActions}>
            <motion.a
              className={styles.primaryCta}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Falar com um especialista
            </motion.a>
            <motion.a
              className={styles.secondaryCta}
              href="#portfolio"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver projetos
            </motion.a>
          </div>
        </div>
        <div className={styles.finalInfo}>
          <p className={styles.finalLabel}>Telefone/WhatsApp</p>
          <p className={styles.finalValue}>(48) 99162-8079</p>
          <p className={styles.finalLabel}>Atendimento</p>
          <p className={styles.finalValue}>São José - SC e região</p>
        </div>
      </motion.section>
    </main>
  );
}
