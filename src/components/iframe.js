import { getPath } from '@/utils';

export default function IFrame({ path, width = '100%', height = 300 }) {
  return <iframe style={{ border: 'none', width, height }} src={getPath(path)} />;
}
