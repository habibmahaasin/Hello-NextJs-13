import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

function DashboardUsingSWR(){
    const { data, error } = useSWR('dashboard',fetcher)
    if(error) return 'ada error'
    if(!data) return 'loading'

    return(
        <div>
            <h3>Dashboard</h3>
            {data.map((datas) => {
                return (
                    <div key={datas.id}>
                        <p> ================================= </p>
                        <li>Posts - {datas.posts}</li>
                        <li>Likes - {datas.likes}</li>
                        <li>Followers - {datas.followers}</li>
                        <li>Following - {datas.following}</li> 
                    </div>
                )
            })}
        </div>
    )
}

export default DashboardUsingSWR