import { useState, useEffect } from 'react'

// try client side data fetching

function Dashboard() {
    const [isLoading,setIsLoading] = useState(true)
    const [dashboardData,setDashboardData] = useState(null)

    useEffect (() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    },[])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return(
        <div>
            <h3>Dashboard</h3>
            {dashboardData.map((datas) => {
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

export default Dashboard