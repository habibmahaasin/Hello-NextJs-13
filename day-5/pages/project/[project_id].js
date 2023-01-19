import Head from 'next/head'

function Project({title}){
  return(
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="project-section">
          <p>Project Section</p>
      </div>
    </>
  )
}

export default Project

export async function getServerSideProps(context){
    const { params } = context
    const { project_id } = params
    const pageTitle = project_id

    return{
        props: {
        title : 'Project ' + pageTitle,
        }
    }
}