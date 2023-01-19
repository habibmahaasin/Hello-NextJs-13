import {useState} from 'react'
import {useRouter} from 'next/router'

// hybrid rendering

function Events({ eventList }){
    const [events,setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportEvent = async () => {
        const resp = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await resp.json()    
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow: true})
    }

    return(
        <>  
            <button onClick={fetchSportEvent}>Sports Event</button>
            <h1>List Event</h1>
            { events.map( eventlist =>{
                return(
                    <div key={eventlist.id}>
                        <h5>{eventlist.title} - {eventlist.date} <i>{eventlist.category}</i></h5>
                        <p>{eventlist.description}</p>
                        <hr></hr>
                    </div>
                )
            })}
        </>
    )
}

export default Events

export async function getServerSideProps(context){
    const { query } = context
    const { category } = query
    const queryString = category ? "category=sports" : '' 

    const resp = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await resp.json()

    return{
        props:{
            eventList : data,
        }
    }
}