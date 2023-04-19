import { nanoid } from "nanoid";
import React, { Component } from "react";
import ContactFormStl from "./ContactForm.module.css";

interface IProps {
  onAddContact;
}

interface IState {
  name: string;
  number: string;
}

export default class ContactForm extends Component<{}, IState> {
  state = {
    name: "",
    number: "",
  };

  onInputValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitContact = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitContact} className={ContactFormStl.ContactForm} id={nanoid()}>
        <label className={ContactFormStl.label}>
          Name
          <input
            type='text'
            value={name}
            onChange={this.onInputValue}
            name='name'
            id={nanoid()}
            className={ContactFormStl.input}
          />
        </label>
        <label className={ContactFormStl.label}>
          Phone Number
          <input
            type='text'
            value={number}
            onChange={this.onInputValue}
            name='number'
            id={nanoid()}
            className={ContactFormStl.input}
          />
        </label>
        <button type='submit' className={ContactFormStl.buttonSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}
