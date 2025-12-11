# Plano de ações - Cena7

## Status atual
- Projeto Next.js 16 (React 19) inicializado com pnpm e App Router.
- React Compiler habilitado e `reactStrictMode` ativo.
- Metadados padrão para SEO: título/descrição, Open Graph, Twitter, robots e viewport.
- Sitemap e robots expostos (`/sitemap.xml`, `/robots.txt`) usando `NEXT_PUBLIC_SITE_URL` ou fallback `https://example.com`.
- Google Analytics integrado via `NEXT_PUBLIC_GA_ID` (carrega apenas quando a chave está definida).

## Próximos passos sugeridos
- Definir `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_GA_ID` no ambiente.
- Criar arte final (logo/favicons) e imagem OG dedicada.
- Validar CTAs finais (WhatsApp/telefone/email) e links reais de portfólio.
- Mapear se haverá formulários de captura e escolha do provedor (ex: form handler, CRM).

## Progresso recente
- Layout inicial da LP implementado com hero, diferenciais, portfólio textual, processo, garantias e CTA final.
- CTAs usando âncoras internas (`#contato`, `#portfolio`) aguardando definição de links/WhatsApp/telefone.
- Estilização responsiva com App Router; pronta para substituir conteúdo placeholder por dados reais.

