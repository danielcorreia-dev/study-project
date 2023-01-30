import { Inter } from '@next/font/google';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Footer></Footer>
    </main>
  );
}
