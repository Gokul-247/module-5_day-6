import React from 'react'
import {useForm} from "react-hook-form"

function Contact() {
  const{ register, handleSubmit } = useForm()
  const OutPut = (data) => console.log(data)
  return (
    <div>
      <h1>This is Contacts Page</h1>
      <form onSubmit={handleSubmit(OutPut)}>
        <label htmlFor="">Please enter your name</label>
        <input {...register('fullname')}type="text"/><br/>
        <label htmlFor="">Please enter your outlookid</label>
        <input {...register('outlook')} type="text"/><br/>
        <label htmlFor="">Please enter your Mesaage</label>
        <input {...register('msg')} type="text"/><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Contact