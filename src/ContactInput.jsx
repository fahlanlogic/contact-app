/* eslint-disable react/prop-types */
import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: ''
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  onTagChange(event) {
    this.setState({
      tag: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addContact(this.state)
  }
  render() {
    return(
      <form className="contact_input" onSubmit={this.onSubmit}>
        <input type="text" id="name" value={this.state.name} onChange={this.onNameChange} />
        <input type="text" id="tag" value={this.state.tag} onChange={this.onTagChange} />
        <button type="submit">Tambah</button>
      </form>
    )
  }
}

export default ContactInput;