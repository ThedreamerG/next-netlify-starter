import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Head from 'next/head'

export default function Accueil() {
    return (
        <div className="accueil">
            <div className='Left Image'>
                <img src="/images/myphoto.jpg" alt="ma photo" />
            </div>
            <div className='Right Container'>
                <Header/>
                <div className='Right Content'>
                    <img src="/Argo.svg" alt="logo"/>
                    <h1>Gaetan Lusson</h1>
                    <h2>Web Developer</h2>
                    <p>
                    Ceci est mon siteweb, servant aussi de CV et de plateforme pour mes projets. Peut changer avec le temps
                    </p>
                </div>
            </div>
    </div>
    
    )
  }

  //   <div className="container">
    //     <Head>
    //       <title>Next.js Starter!</title>
    //       <link rel="icon" href="/favicon.ico" />
    //     </Head>
  
    //     <main>
    //       <Header title="Gaetan Lusson" />
    //       <p className="description">
    //         This is a personal project to learn Next.js
    //         Also, I'm using Tailwind CSS for styling
    //         My name is gaetan and I'm a web developer
    //       </p>
    //     </main>
  
    //     <Footer />
    //   </div>