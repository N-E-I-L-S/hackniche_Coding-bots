import React from 'react'
import { NavLink } from 'react-router-dom'
import JobsCard from '../components/JobsCard'
import './Jobs.css'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import useJobs from '../context/JobsContext'

export default function Jobs() {

    const {loading, filterjobs, updateFilterValue} = useJobs();

    if(loading){
        return <>...Loading</>
    }

    return (
            <div className='bg-green-cus-1'>
                <Navbar />
                <div className="jobspage bg-green-cus-1 mt-20">
                    <div className="jobspage-div">
                        <div className="leftdiv">
                            <label htmlFor="search">Search Your Job</label>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" name="text" placeholder="Search by Position" onChange={updateFilterValue} />
                            </form>
                        </div>
                        <div className="rightdiv">
                            <div>
                                <h3 className='text-3xl'>Employment Opportunities</h3>
                                <hr />
                            </div>
                            <div className="jobs-card-div">

                                {filterjobs.map((i, index) => {
                                    return <div key={index}>
                                        <JobsCard props={i} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

    )
}
