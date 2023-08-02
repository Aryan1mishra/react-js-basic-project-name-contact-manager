import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      
     <ContactCard contact={contact}/>
    );
  });
  return (
    <div className="p-2 m-2 text-gray-900 ">
      <h2 className="m-3 px-1 text-gray-900 font-bold text-2xl">Contact List
      </h2>
      
      {renderContactList}</div>
  );
};

export default ContactList;
