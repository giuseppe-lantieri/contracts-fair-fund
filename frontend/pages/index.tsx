import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Carousel } from '../components/Carousele';
import { Title } from '../components/Title';
import { Footer } from '../components/Footer';
import { getPublicClient } from '@wagmi/core'
import contracts from '../constant/contracts';

const Home: NextPage = () => {

  const publicClient = getPublicClient()

  const cards = [
    { descrpition: "abc", fondi: 100, id: "1", mio: 10, src: "/asset/i1.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 100, id: "1", mio: 10, src: "/asset/i2.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 100, id: "1", mio: 10, src: "/asset/i2.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 200, id: "1", mio: 10, src: "/asset/i2.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 0, id: "1", mio: 0, src: "/asset/i2.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 0, id: "1", mio: 0, src: "/asset/i2.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 0, id: "1", mio: 0, src: "/asset/i2.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 0, id: "1", mio: 0, src: "/asset/i2.jpeg", title: "assert" },
    { descrpition: "abc", fondi: 0, id: "1", mio: 0, src: "/asset/i2.jpeg", title: "assert" },
  ]


  return (
    <div >
      <Navbar />
      <Title title='Il Luogo giusto per dare valore a ciò che conta davvero per te' />
      <button onClick={getCampains}>Premimi</button>
      <button onClick={getRegistry}>Premimi</button>
      <Carousel cards={cards} />
      <Footer />
    </div>
  );
};

export default Home;