export default function IFrame({ path, width = '100%', height = 300 }) {
  const url = `${process.env.BASE_PATH}${path}`;

  return <iframe style={{ border: 'none', width, height }} src={url} />;
}
