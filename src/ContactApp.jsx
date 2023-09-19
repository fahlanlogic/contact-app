import { dataContact } from "./data";
import ContactList from "./ContactList"
import React from "react";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: dataContact()
    }
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);

  }
  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts })
  }
  
  render() {
    return (
    <div className="contact_app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler} />
    </div>
  )
  }
}

export default ContactApp;