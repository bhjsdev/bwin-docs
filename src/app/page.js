import Example from '@/examples/home';
import Client from '@/components/client';
import './page.css';

export default function Page() {
  return (
    <div className="home">
      <Client>
        <Example />
      </Client>
    </div>
  );
}
