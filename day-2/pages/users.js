import User from "../components/user"

function UserList({users}){
    return(
        <>
        <h2>List User</h2>
        {users.map((user) => {
            return(
                <div key={user.id}>
                    <User user={user}></User>
                </div>
            )
        })}
        </>
    )
}

export default UserList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
    return {
        props:{
            users : data,
        },
    }
}