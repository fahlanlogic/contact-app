import { dataContact } from "./data";
import ContactList from "./ContactList"

function ContactApp() {
  const contacts = dataContact();
  return (
    <div className="contact_app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default ContactApp;