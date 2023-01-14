import {useRouter} from 'next/router'

function Product({product}){
    const router = useRouter()
    
    if (router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <>
            <h1>Product Detail</h1>
            <li>{product.title} </li>
            <li>{product.price} </li>
            <li>{product.desc} </li>
        </>
    )
}

export default Product

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`http://localhost:4000/products/${params.product_id}`)
    const data = await response.json()
    
    if (!data.id){
        return {
            notFound : true
        }
    }
    
    return{
        props:{
            product : data,
        }
    }
}

export async function getStaticPaths(){
    return{
        paths:[
            {
                params : {product_id : '1'}
            }
        ],
        fallback : true
    }
}