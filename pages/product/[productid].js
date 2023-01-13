import { useRouter } from "next/router"

function ProductDetail(){
    const router = useRouter()
    const productId = router.query.productid
    return(
        <p>product detail dengan id { productId }</p>
    )
}

export default ProductDetail