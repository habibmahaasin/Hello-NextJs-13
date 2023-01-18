import Link from 'next/link'

function Prdocutlist( {products} ){
    return(
        <>
        <h3>List Product</h3>
        { products.map(product => {
            return(
                <div key={product.id}>
                    <li><Link href={`products/${product.id}`}>{product.title}</Link></li>
                </div>
            )
        })}
        </>
    )
}

export default Prdocutlist

export async function getStaticProps(){
    console.log("Generating / Regenerating Product List")
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    return{
        props: {
            products : data,
        },
        revalidate : 10,
    }
}