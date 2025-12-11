import Image from "next/image";
import styles from "./page.module.css";

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
      <section className={styles.hero} id="inicio">
        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
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
              <a className={styles.primaryCta} href="#contato">
                Falar no WhatsApp
              </a>
              <a className={styles.secondaryCta} href="#portfolio">
                Ver portfólio
              </a>
            </div>
            <ul className={styles.heroPoints}>
              <li>Projeto sob medida com aprovação rápida.</li>
              <li>Proteção total do ambiente na montagem.</li>
              <li>Garantia de 5 anos em cada entrega.</li>
            </ul>
          </div>
          <div className={styles.heroLogoCard}>
            <div className={styles.logoWrapper}>
              <Image
                src="/logo.png"
                alt="Cena7 Móveis Personalizados"
                width={280}
                height={280}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.promiseBand} aria-label="Vantagens principais">
        <div className={styles.promiseInner}>
          {promiseBand.map((item) => (
            <div key={item.title} className={styles.promiseItem}>
              <p className={styles.promiseTitle}>{item.title}</p>
              <p className={styles.promiseText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.features} id="diferenciais">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Compromisso com prazo e qualidade</p>
          <h2>Entrega no tempo certo, com qualidade e vantagens reais</h2>
        </header>
        <div className={styles.featureGrid}>
          {featureCards.map((card) => (
            <article key={card.title} className={styles.featureCard}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.portfolio} id="portfolio">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Portfólio</p>
          <h2>Esses não são apenas móveis, são sonhos que realizamos</h2>
        </header>
        <div className={styles.portfolioShowcase}>
          {portfolioItems.map((item) => (
            <div key={item.label} className={styles.portfolioCard}>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <a className={styles.primaryCta} href="#contato">
          Quero um móvel de qualidade
        </a>
      </section>

      <section className={styles.about} id="sobre">
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
            <a className={styles.primaryCta} href="#contato">
              Quero falar com um especialista
            </a>
          </div>
        </div>
        <div className={styles.aboutMedia} aria-hidden>
          <div className={styles.photoPlaceholder}>Espaço para fotos reais</div>
        </div>
      </section>

      <section className={styles.testimonials} id="depoimentos">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Depoimentos</p>
          <h2>O que dizem nossos clientes</h2>
        </header>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.testimonialCard}>
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
            </article>
          ))}
        </div>
        <div className={styles.testimonialActions}>
          <a className={styles.secondaryCta} href="#contato">
            Ver todas as avaliações
          </a>
        </div>
      </section>

      <section className={styles.finalCta} id="contato">
        <div className={styles.finalCopy}>
          <h2>Pronto para transformar seu ambiente?</h2>
          <p>
            Vamos criar um projeto sob medida para seu espaço, com condições
            claras e entrega combinada.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#contato">
              Falar com um especialista
            </a>
            <a className={styles.secondaryCta} href="#portfolio">
              Ver projetos
            </a>
          </div>
        </div>
        <div className={styles.finalInfo}>
          <p className={styles.finalLabel}>Telefone/WhatsApp</p>
          <p className={styles.finalValue}>48 99999-9999</p>
          <p className={styles.finalLabel}>Atendimento</p>
          <p className={styles.finalValue}>São José - SC e região</p>
        </div>
      </section>
    </main>
  );
}
