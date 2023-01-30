import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section Start */}
      <div className="hero min-h-screen bg-h-blue">
        <div className="hero-content text-left flex-auto">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-t-blue mb-12">
              Contribua, Cresça, Ganhe.
            </h1>
            <p className="text-lg text-p-gray font-normal mb-8">
              Participe de ume rede pioneira na proteção do ambiental e na
              interativade sustentável com benefícios.
            </p>
            <button className="text-2xl rounded bg-t-blue font-bold shadow-md px-8 py-3 hover:text-t2-blue transition-colors ease-in-out">
              Conheça os benefícios
            </button>
          </div>
          <div>
            <Image src="/images/HomeLogo.svg" width={807} height={538} alt="" />
          </div>
        </div>
      </div>
      {/* Hero Section End */}
      {/* Card Section */}
      <section>
        <div className='text-center pt-16'>
          <span className="uppercase text-t2-blue font-bold mb-2">rede social sustentável</span>
          <h2 className=''>Ajude o mundo e se divirta</h2>
        </div>
      </section>
      {/* Card Section End*/}
      <Footer />
    </>
  );
}
