# Next.js Template - NextStarter

![Next.js](https://img.shields.io/badge/Next.js-14-green)
![NextAuth](https://img.shields.io/badge/NextAuth-v5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-blueviolet)
![ESLint](https://img.shields.io/badge/ESLint-Configured-yellow)
![Prettier](https://img.shields.io/badge/Prettier-Configured-lightgrey)
![Commitlint](https://img.shields.io/badge/Commitlint-Configured-orange)
![Husky](https://img.shields.io/badge/Husky-Configured-red)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Configured-success)

Kickstart your Next.js projects with this template featuring authentication using NextAuth v5, Tailwind CSS for styling, and the latest Next.js 14. It comes pre-configured with ESLint, Prettier, Commitlint and Husky for a solid development setup. Perfect for modern, secure web applications.

> [!WARNING]  
> This app is a work in progress

## Features

- 🚀 [Next.js](https://nextjs.org) with App Router
- ✅ Type checking [TypeScript](https://www.typescriptlang.org)
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 🔒 Authentication with NextAuth v5 [Auth.js](https://authjs.dev/getting-started/installation?framework=next.js): Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
- 🔄 Social Auth (Google & GitHub)
- 💼 Type-safe ORM with [PrismaORM](https://www.prisma.io/) and [PostgreSQL](https://www.postgresql.org/)
- 📝 Form with [React Hook From](https://react-hook-form.com/get-started)
- 🔍 Validation library with [Zod](https://zod.dev/)
- 🧹 Linter with [ESLint](https://eslint.org)
- 🖌️ Code Formatter with [Prettier](https://prettier.io)
- 🐶 Husky for Git Hooks
- 🎯 Lint-staged for running linters on Git staged files
- 🔍 Lint git commit with Commitlint
- 🚀 Run tests on pull request with GitHub Actions
- 📂 Absolute Imports using `@` prefix
- 🔍 SEO metadata, Sitemap.xml and robots.txt with next-sitemap
- 📈 Maximize lighthouse score\
- 🛎️ Sonner for toasts
- 📤 Uploadthing for file uploads
- 🎨 Lucide-react for icons
- 🌗 Next-themes for dark and light mode
- 🔄 Next-js-toploader for smooth page transitions
- 📧 Resend for sending email
- 🌐 Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/) (Unstable)


## Features to be implemented (Soon):

- [ ] Payment Integration with esewa, khalti, stripe (anyone or maybe all)
- [ ] Framer motion or gsap for animation
- [ ] Analytics

## Getting Started

1. Clone the repository:

```sh
pnpm create next-app --example "https://github.com/diwashbhattarai999/NextStarter"
```

2. Install dependencies using pnpm:

```sh
pnpm install
```

3. Copy `.env.example` to `.env.local` or `.env` and update the variables.

```sh
cp .env.example .env
```

4. Start the development server:

```sh
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
