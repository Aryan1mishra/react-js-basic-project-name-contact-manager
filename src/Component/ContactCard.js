import React from 'react'
import user from './img/user.png';

const ContactCard = (props) => {
    const { name , phone}= props.contact;

  return (
    <>
    <div className="flex space-x-4 m-2 p-2">
    <img className="w-10 h-10 rounded-full" src={user} alt="Rounded avatar"/>
    <div className=" flex space-x-10 px-3 ">
      <div className="font-bold uppercase mt-2 ">{name}</div>
      <div className="font-semibold mt-2">{phone}</div>
    </div>

  </div>
  </>
  )
}

export default ContactCard
