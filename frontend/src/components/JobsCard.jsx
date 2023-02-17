import React from 'react'

export default function JobsCard(props) {
  return (
    <>
    <div className='jobscard'>
        Position: {props.position || "Lorem, ipsum dolor."} <br/>
        Company Name: {props.companyname || "Lorem, ipsum dolor." }<br/>
        Location: {props.location || "Lorem, ipsum dolor."} <br/>
        Salary : {props.salary  || "Lorem, ipsum dolor."}
    </div>
    </>
  )
}
