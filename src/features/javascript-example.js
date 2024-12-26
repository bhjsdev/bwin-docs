export default function Example() {
  const url = process.env.LOCAL_BUILD === 'true' ? '/demo.html' : '/bwin-docs/demo.html';

  return <iframe style={{ border: 'none' }} width="420" height="320" src={url} />;
}
