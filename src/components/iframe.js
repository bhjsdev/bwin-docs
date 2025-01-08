export default function IFrame({ path }) {
  const url = process.env.LOCAL_BUILD === 'true' ? `/${path}.html` : `/bwin-docs/${path}.html`;

  return <iframe style={{ border: 'none', width: '100%', height: 300 }} src={url} />;
}
