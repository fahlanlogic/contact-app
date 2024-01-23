import { dataContact } from "./data";
import ContactList from "./ContactList"
import React from "react";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: dataContact()
    }
    
    this.onAddEventHandler = this.onAddEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }
  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts })
  }
  
  onAddEventHandler({ name, tag }) {
    this.setState((previousContact) => {
      return {
        contacts: [
          ...previousContact.contacts,
          {
            id: previousContact.contacts.length + 1,
            name,
            tag,
            imageUrl: './public/img/kakek.jpg'
          }
        ]
      }
    })
  }

  render() {
    return (
    <div className="contact_app">
      <h1>Aplikasi Kontak</h1>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={this.onAddEventHandler}/>
      <h2>Daftar Kontak</h2>
      <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler} />
    </div>
  )
  }
}

export default ContactApp;