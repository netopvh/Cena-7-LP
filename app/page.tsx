import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Cena7</p>
        <h1 className={styles.title}>Landing em construção</h1>
        <p className={styles.lead}>
          Estrutura pronta para evoluir em um site rápido, acessível e com
          medição ativa. Personalize a partir deste ponto com o conteúdo final.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Performance e app router</h2>
          <p>
            Next.js 16 com React 19, React Compiler e tipagem estrita para
            entregas rápidas e seguras.
          </p>
        </article>
        <article className={styles.card}>
          <h2>SEO pronto</h2>
          <p>
            Metadados padrão, sitemap e robots configuráveis via
            NEXT_PUBLIC_SITE_URL.
          </p>
        </article>
        <article className={styles.card}>
          <h2>Medição</h2>
          <p>
            Google Analytics habilitável via NEXT_PUBLIC_GA_ID, carregado apenas
            quando a chave é informada.
          </p>
        </article>
      </section>
    </main>
  );
}
