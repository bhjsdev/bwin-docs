import SideNav from "./side-nav";

export const metadata = {
  title: "Binary Window Docs",
  description: "Documentation for Binary Window library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
