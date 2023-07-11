import React, { useState, useEffect } from 'react';
import './App.css';
import nextId from "react-id-generator"
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(null);

  const addContactHandler = (contact) => {
    if(contacts === null) {
      setContacts([contact])
    }else {
      setContacts((prevContacts) => [...prevContacts, {id:nextId(), ...contacts}]);
    }
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return addContactHandler.contact.id !== id;

    });
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts !== null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      {contacts !== null ? <ContactList contacts={contacts} getContactId={removeContactHandler} /> : null}
    </div>
  );
}

export default App;