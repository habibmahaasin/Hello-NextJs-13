function NewsList({ articles }){
    return(
        <>
            <h1>News List</h1>
            { articles.map(article => {
                return(
                    <div key={article.id}>
                        <li>{article.title} | {article.desc} | {article.category}</li>
                    </div>
                )
            })}
        </>
    )
}

export default NewsList

export async function getServerSideProps(){
    const resp = await fetch('http://localhost:4000/news')
    const data = await resp.json()

    return{
        props:{
            articles : data, 
        }
    }
}