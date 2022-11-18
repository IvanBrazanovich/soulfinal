import Head from "next/head";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Vender from "./components/Vender";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soul Productos Aromáticos</title>
        <meta
          name="description"
          content="Soul - Tienda de Productos aromáticos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Header />
        <Productos />
        <Nosotros />
        <Vender />
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </main>
    </div>
  );
}
