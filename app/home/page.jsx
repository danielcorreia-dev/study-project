import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-h-blue">
        <div className="hero-content text-center flex-auto">
          <div className='max-w-md'>
            <h1 className='text-5xl text-left font-bold text-t-blue mb-6'>Contribua, cresça e ganhe</h1>
            <p className='text-lg text-p-gray text-left'>Participe de ume rede pioneira na proteção do ambiental e na interativade sustentável com benefícios. </p>
          </div>
          <div>
            <Image src="/images/HomeLogo.svg" width={807} height={538} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
