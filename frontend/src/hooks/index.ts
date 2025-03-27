import { useCallback, useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";



export const useEvents = () => {


    const [upcomingEvents, setupcomingEvents] = useState<any[]>([]);
    const [completedEvents, setcompletedEvents] = useState<any[]>([]);
    const [userDetails, setuserDetails] = useState<any[]>([]);

    const getUpcomingData = useCallback( async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/api/v1/app/event/event-details-upcoming`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            setupcomingEvents(res.data.events)
        } catch (error) {
            console.log(error)
        } 

    },[])
    useEffect(() => {
        getUpcomingData()
    }, [getUpcomingData])


    const getcompletedData = useCallback( async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/api/v1/app/event/event-details-completed`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            setcompletedEvents(res.data.events)
        } catch (error) {
            console.log(error)
        } 

    },[])

    useEffect(() => {
        getcompletedData()
    }, [getcompletedData])


    const getUserDetails = useCallback( async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/api/v1/app/user/get-details`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            setuserDetails(res.data.details)
        } catch (error) {
            console.log(error)
        } 

    },[])

    useEffect(() => {
        getUserDetails()
    }, [getUserDetails])
    

    return {
        upcomingEvents,
        completedEvents,
        userDetails
    }
}