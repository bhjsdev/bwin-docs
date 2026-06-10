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

// Seed the theme from a ?theme= query param before paint. next-themes has no
// query-param support, so we write the value into the localStorage key it reads
// ('theme') ahead of its own pre-paint script (which renders in <body>). Head
// runs first, so this always wins. While ?theme= is in the URL it overrides any
// saved preference; ThemeToggle strips it once the user picks manually.
const themeFromQueryScript = `
(function () {
  try {
    var theme = new URLSearchParams(location.search).get('theme');
    if (theme && ['light', 'dark', 'system'].indexOf(theme) !== -1) {
      localStorage.setItem('theme', theme);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeFromQueryScript }} />
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
                <span className="top-nav__link">
                  <i className="bi bi-house" aria-hidden="true" />
                  <Link href="/" prefetch={false}>
                    Home
                  </Link>
                </span>
                <span className="top-nav__link">
                  <i className="bi bi-book" aria-hidden="true" />
                  <Link href="/general/overview" prefetch={false}>
                    Docs
                  </Link>
                </span>
                <span className="top-nav__link">
                  <i className="devicon-github-original" aria-hidden="true" />
                  <Link
                    href="https://github.com/bhjsdev/bwin"
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                  >
                    Repo
                  </Link>
                </span>
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
