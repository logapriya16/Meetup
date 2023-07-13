import React, { createContext, useState } from 'react'
import { data } from './data'
import { useNavigate } from 'react-router-dom'
export const MeetupContext = createContext()
export default function MeetupProvider({children}) {
    const navigate= useNavigate(0)
    const [meetups,setMeetups]= useState(data.meetups)
    const [id,setId] = useState("")
    const NavigatePage =(id)=>{
        navigate('/eventdetails')
        setId(id)
    }
 return (
    <MeetupContext.Provider value={{meetups,NavigatePage,id}}>
        {children}
    </MeetupContext.Provider>
  )
}
