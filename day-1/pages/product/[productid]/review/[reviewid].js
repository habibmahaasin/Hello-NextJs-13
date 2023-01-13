import { useRouter } from "next/router"

function Review(){
    const router = useRouter()
    const {productid, reviewid} = router.query

    return(
        <p>Review id : { reviewid } pada product id : { productid }</p>
    )
}

export default Review