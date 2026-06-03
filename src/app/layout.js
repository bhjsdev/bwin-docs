import Link from 'next/link';
import Footer from './footer';
import Logo from '@/components/logo';
import ThemeProvider from '@/components/theme-provider';
import ThemeToggle from '@/components/theme-toggle';
import './globals.css';
import './layout.css';

export const metadata = {
  title: 'Binary Window - Drag Drop Resize and More',
  description:
    'A lightweight JavaScript library for creating window tiling layouts with drag, drop, and resizable features.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Noto Sans: app body font. DM Mono: code font. IBM Plex Sans:
            home example AG Grid + AG Charts (see src/examples/home/). */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {/* Keeps dark-mode iframe canvases transparent (color-scheme), shared with
            the standalone iframe examples (public/*.html). Served from public/. */}
        <link rel="stylesheet" href={process.env.BASE_PATH + '/iframe-theme.css'} />
      </head>
      <body>
        <ThemeProvider>
          <div className="layout">
            <nav className="top-nav">
              <Link className="logo" href="/" prefetch={false}>
                <Logo width={100} height={50} />
              </Link>
              <div className="top-nav__links">
                <Link href="/" prefetch={false}>Home</Link>
                <Link href="/general/overview" prefetch={false}>Docs</Link>
                <Link
                  className="top-nav__github"
                  href="https://github.com/bhjsdev/bwin-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  title="GitHub repository"
                  prefetch={false}
                >
                  <i className="devicon-github-original" aria-hidden="true" />
                </Link>
                <ThemeToggle />
              </div>
            </nav>
            <main className="main">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
