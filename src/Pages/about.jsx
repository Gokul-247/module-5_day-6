
import React from 'react'
import CustomButton from '../components/CustomButton'

function About (){
    const aboutme ={
      name : 'Gokul',
      emp_id :'T100',
      Organization : 'Deloitte',
      position : 'Intern Trainee',
      emaild : 'gokul@outloook.com'
    }
  return (
    <div>
      <table border = "1">
        <tr>
          <td>Name</td>
          <td>Emp_Id</td>
          <td>Organisation</td>
          <td>Position</td>
          <td>Outook id</td>
        </tr>
        <tr>
          <td>{aboutme.name}</td>
          <td>{aboutme.emp_id}</td>
          <td>{aboutme.Organization}</td>
          <td>{aboutme.position}</td>
          <td>{aboutme.emaild}</td>
        </tr>
      </table>
    </div>
  )
}

export default About