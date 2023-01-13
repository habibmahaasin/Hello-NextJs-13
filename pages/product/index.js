import Link from "next/link"

function ProductList( {productid = 100} ){
    return(
        <>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/product/1"}>product 1</Link></li>
            <li><Link href={"/product/2"} replace >product 2</Link></li>
            <li><Link href={`/product/${productid}`}>product {productid}</Link></li>
        </>
    )
}
export default ProductList