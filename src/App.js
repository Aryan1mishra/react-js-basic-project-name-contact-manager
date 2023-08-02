import React,{ useState } from 'react';
import './index.css';
import Header from './Component/Header';
import AddContact from './Component/AddContact';
import ContactList from './Component/ContactList';


function App() {
  const [contacts , setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    setContacts([...contacts,contact]);
  }
  return (
    <div>
      
     <Header/>
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
