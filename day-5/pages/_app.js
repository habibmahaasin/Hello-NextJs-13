import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/layout.css'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import Head from 'next/head'

function MyApp({Component, pageProps}) {

  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Learn NextJs 13</title>
      </Head>
      <Header />
      <div className='container'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
