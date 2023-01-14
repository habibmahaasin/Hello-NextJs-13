import Link from 'next/link'

function Home(){
  return(
    <>
      <p>Home Page</p>
      <li>
        <Link href={'/users'}>user</Link>
      </li>
      <li>
        <Link href={'/posts'}>Posts</Link>
      </li>
      <li>
        <Link href={'/products'}>Products</Link>
      </li>
    </>
  )
}

export default Home