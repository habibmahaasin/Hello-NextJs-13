import { comments } from '../../data/comments'

function Comment({ comment }) {
    return(
        <div>
            {comment.id} - {comment.text}
        </div>
    )
}

export default Comment

export async function getStaticPaths(){
    return{
        paths: [
            { params : {comment_id : '1'}},
            { params : {comment_id : '2'}},
            { params : {comment_id : '3'}},
        ],
        fallback : false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const {comment_id} = params

    const comment = comments.find((comment) => comment.id === parseInt(comment_id))
    console.log(comment)

    return{
        props: {
            comment,
        },
    }
}