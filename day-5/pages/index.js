import Head from 'next/head'

function Home({title}){
  return(
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="home-section">
          <p>Home Section</p>
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps(){
  return{
    props: {
      title : 'Home Page'
    }
  }
}