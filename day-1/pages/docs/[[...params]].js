import { useRouter } from "next/router"

function Docs(){
    const router = useRouter()
    const { params = [] } = router.query

    if(params.length === 2){
        return(
            <h1> sedang berada pada halaman {params[0]}, dengan sub halaman {params[1]}</h1>
        )
    }
    else if(params.length === 1){
        return(
            <h1> sedang berada pada halaman {params[0]}</h1>
        )
    }
    
    return(
        <p>Docs Page</p>
    )
}

export default Docs