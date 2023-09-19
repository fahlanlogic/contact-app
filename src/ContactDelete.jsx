/* eslint-disable react/prop-types */
function ContactDelete({ id, onDelete }) {
  return (
    <button className="contact-item_delete" onClick={() => onDelete(id)}>X</button>
  )
}

export default ContactDelete;