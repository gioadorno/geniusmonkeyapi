import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Form from '../components/Form'

export default function Home({ data }) {


  console.log(data)
  return (
    <div className='flex relative  flex-col w-full h-full md:h-screen snap-y snap-mandatory scrollbar-track-slate-300/20 scrollbar-thumb-[#e96d5dcb] scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thin'>
      <Head>
        <title>Genius Monkey Test</title>
        <meta name="description" content="You guys are awesome!" />
        <meta name="author" content="Giovanni Adorno" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
     <div className='relative w-full items-center justify-center'>
      <main className=' flex items-center justify-center p-14 flex-col'>
        <section id='intro' className='flex items-center h-screen justify-center snap-start py-12'>
          <Intro />
        </section>
        <section id='form' className='h-screen snap-start flex items-center justify-center'>
          <Form data={data} />
        </section>
      </main>
     </div>
        <img className='fixed h-full w-full object-cover top-0 bottom-0 -z-30 contrast-[0.9] brightness-[0.75] saturate-[0.8]' src='/bgphoto.jpg' />
    </div>
  )
}

// Information fetched will be static on build -  Faster loading for better SEO
// const data = await fetch(`https://dealer-5wb4b3itbq-uc.a.run.app/dealers/`, {
//   headers: {
//     Authorization: `Token ${process.env.GENIUS_MONKEY}`
//   }
// }).then(
//   (res) => res.json()
// );

//   return {
//     props: {
//       geniusMonkeyData
//     }
//   }
// };

// New information will be received everytime someone fetches the webpage
export async function getServerSideProps() {
  // Get All Dealers
  const data = await fetch(`https://dealer-5wb4b3itbq-uc.a.run.app/dealers/`, {
    headers: {
      Authorization: `Token ${process.env.GENIUS_MONKEY}`
    }
  }).then(
    (res) => res.json()
  );

  // Get Single Dealer
  // const dealer = await fetch(`https://dealer-5wb4b3itbq-uc.a.run.app/dealers/${id}`, {
  //   headers: {
  //     Authorization: `Token ${process.env.GENIUS_MONKEY}`
  //   }
  // }).then(
  //   (res) => res.json()
  // );

  // // Get Dealer with Option
  // const dealerCards = await fetch(`https://dealer-5wb4b3itbq-uc.a.run.app/dealers/${id}/${option}`, {
  //   headers: {
  //     Authorization: `Token ${process.env.GENIUS_MONKEY}`
  //   }
  // }).then(
  //   (res) => res.json()
  // );

  return {
    props: {
      data,
    }
  }
};