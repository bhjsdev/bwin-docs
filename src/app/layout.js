import SideNav from "@/components/side-nav";
import "./globals.css";
import "./layout.css";

export const metadata = {
  title: "Binary Window Docs",
  description: "Documentation for Binary Window library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <SideNav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
