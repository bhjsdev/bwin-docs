import './footer.css';

export default function Footer() {
  const buildDate = process.env.BUILD_DATE;

  return <footer className="layout__footer">Updated at: {buildDate}</footer>;
}
