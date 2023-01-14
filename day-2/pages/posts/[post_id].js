function Post({ post }){
    return (
        <>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticPaths(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()

    // const paths = data.map( post => {
    //     return {
    //         params : {
    //             post_id : `${post.id}`
    //         }
    //     }
    // })

    return{
        paths:[
            {
                params : { post_id : '1'}
            },
            {
                params : { post_id : '2'}
            },
            {
                params : { post_id : '3'}
            },
        ],
        fallback : 'blocking',
    }
}

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)
    const data = await response.json()

    if (!data.id){
        return {
            notFound : true,
        }
    }
    return {
        props:{
            post : data,
        },
    }
}