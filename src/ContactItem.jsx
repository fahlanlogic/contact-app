/* eslint-disable react/prop-types */
import ContactDelete from "./ContactDelete";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

function ContactItem({imageUrl, name, tag, id, onDelete}) {
  return (
    <div className="contact_item">
        <ContactItemImage imageUrl={imageUrl}/>
        <ContactItemBody name={name} tag={tag}/>
        <ContactDelete id={id} onDelete={onDelete}/>
    </div>
  )
}

export default ContactItem;