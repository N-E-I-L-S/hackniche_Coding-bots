import React, { createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import reducer from './JobsContextFunctions'

const JobsContext = createContext()
export function JobsProvider({children}) {
    const initialstate={
        filterjobs : [],
        loading : false,
        error : false,
        jobs : [],
        filter :{
           job: "",
        } 
    }

    const [ state, dispatch ]= useReducer(reducer, initialstate)
    useEffect(() => {
        getJobs()
    }, [])
    
    useEffect(()=>{
        dispatch({type: 'FILTER_JOBS'})
    },[state.filter])

    const updateFilterValue = (event) =>{
        let value = event.target.value;
        return dispatch({type: 'UPDATE_FILTER_VALUE' ,payload:value})
    }

    const getJobs = async () => {
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get('http://localhost:3005/api/jobs/alljobs');
            const jobs = await res.data;
            dispatch({ type: "SET_API_DATA", payload: jobs })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }


    return (
        <>
            <JobsContext.Provider value={{...state, dispatch, updateFilterValue}}>
            {children}
            </JobsContext.Provider>

        </>
    )
}
function useJobs() {
    return useContext(JobsContext)
}

export default useJobs;
