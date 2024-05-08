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

- Typescript for type-safety
- Authentication with NextAuth v5 (Auth.js)
- Tailwind CSS for styling
- ESLint for code linting
- Prettier for code formatting
- Commitlint for commit message linting
- Husky for pre-commit and commit-msg hooks
- Prisma ORM with PostgreSQL for database management
- Uploadthing for file uploads
- Lucide-react for icons
- Next-themes for dark and light mode
- Next-js-toploader for page transitions
- Resend for sending email
- Sonner for toasts
- Zod for validation

## Features to be implemented (Soon):

- [ ] Internationalization with next-intl
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
