import { useState } from 'react'
import Link from "next/link"

function CommentsPages(){
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const resp = await fetch('/api/v1/comments')
        const data = await resp.json()
        setComments(data)
    }
    
    const submitComment = async() => {
        const resp = await fetch('/api/v1/comments',{
            method : 'POST',
            body : JSON.stringify({comment}),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const data = await resp.json()
        console.log(data)
        fetchComments()
    }

    const deleteComment = async comment_id => {
        const resp = await fetch(`/api/v1/comments/${comment_id}`,{
            method : 'DELETE',
        })
        const data = await resp.json()
        console.log(data)
        fetchComments()
    }

    return(
        <>
            <h3>Halaman Komentar</h3>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>{comment.id} - {comment.text}</p>
                        <button onClick={() => deleteComment(comment.id)}>Delete Comment</button>
                        <Link href={`/comments/${comment.id}`}> go to page</Link>
                        <hr></hr>
                    </div>
                )
            })}
        </>
    )
}

export default CommentsPages