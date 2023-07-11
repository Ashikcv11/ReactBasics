import React from "react";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";

const ContactList = (props) => {
    console.log(props);
    // contact = null

    const deleteContactHandler = (id) => {
        props.getContact(id);
    }
    

    const renerContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        

    })
  return (
      <div className="ui celled list">{renerContactList}</div>
  )
}

export default ContactList; 