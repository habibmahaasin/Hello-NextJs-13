import Link from "next/link"
import { useRouter } from "next/router"

function Home(){
    const router = useRouter()

    const handleClick = () => {
        console.log("press berhasil")
        router.push('/product')
    }

    return(
        <div>
            <h1>Menu Halaman</h1>
            <li>
                <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
                <Link href={"/product"}>Product</Link>
            </li>
            <button onClick={handleClick}>Press</button>
        </div>
    )
}

export default Home