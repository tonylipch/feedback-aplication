import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit]= useState({
        item: {},
        edit: false
    })

    useEffect(()=>{
        fetchFeedback()

    },[])

    //Fetch feedback
    const fetchFeedback = async () =>{
        const response = await
        fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    //Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
          })
      

        setFeedback([newFeedback, ...feedback])
    } 

    //Delete feedback
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure?')){
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
 
    }

    //Set item
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Update item
    const updateFeedback = async (id, updItem) =>{
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',

            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()
            setFeedback(
                feedback.map((item)=>
                    (item.id ===id ? {...item, ...data}: item))
            )
    }



    return <FeedbackContext.Provider value = {{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
        
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext