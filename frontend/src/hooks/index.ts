import { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";



export const useEvents = () => {


    const [upcomingEvents, setupcomingEvents] = useState<any[]>([]);
    const [completedEvents, setcompletedEvents] = useState<any[]>([]);
    const [userDetails, setuserDetails] = useState<any[]>([]);
    const [contentLoading, setcontentLoading] = useState<boolean>(false);
    const dataFetchedRef = useRef(false);

    const getUpcomingData = useCallback( async () => {
        try {
            setcontentLoading(true)
            const res = await axios.get(`http://127.0.0.1:8787/api/v1/app/event/event-details-upcoming`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            console.log(res.data)
            setupcomingEvents(res.data.events)
        } catch (error) {
            console.log(error)
        } 
        finally{
            setcontentLoading(false)
        }

    },[])
    // useEffect(() => {
    //     getUpcomingData()
    // }, [getUpcomingData])


    const getcompletedData = useCallback( async () => {
        try {
            setcontentLoading(true)
            const res = await axios.get(`${BACKEND_URL}/api/v1/app/event/event-details-completed`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            setcompletedEvents(res.data.events)
        } catch (error) {
            console.log(error)
        } 
        finally{
            setcontentLoading(false)
        }

    },[])

    // useEffect(() => {
    //     getcompletedData()
    // }, [getcompletedData])


    const getUserDetails = useCallback( async () => {
        try {
            setcontentLoading(true)
            const res = await axios.get(`${BACKEND_URL}/api/v1/app/user/get-details`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            setuserDetails(res.data.details)
        } catch (error) {
            console.log(error)
        } 
        finally{
            setcontentLoading(false)
        }

    },[])

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        getUserDetails(),
        getUpcomingData(),
        getcompletedData()
    }, [getUpcomingData , getcompletedData , getUserDetails])
    

    return {
        upcomingEvents,
        completedEvents,
        userDetails,
        contentLoading
    }
}