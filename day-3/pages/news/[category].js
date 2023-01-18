function ArticleListByCategory({articles,category,author}){
    return(
        <>
            <h1>Menampilkan berita dalam kategori <i>{category}</i> oleh {author}</h1>
            {articles.map(article => {
                return(
                    <div key={article.id}>
                        <h2>{article.id}. {article.title}</h2>
                        <p>{article.desc}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context){
    const { params,req,res,query } = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=mahaasin'])

    const { category } = params
    const resp = await fetch(`http:localhost:4000/news?category=${category}`)
    const data = await resp.json()
    const author = 'Habib Irfan Mahaasin'

    return{
        props:{
            articles:data,
            category,
            author,
        },
    }
}