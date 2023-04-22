import { nanoid } from "nanoid";
import React, { Component } from "react";
import ContactFormStl from "./ContactForm.module.css";

interface IProps {
  onAddContact(name: string, number: string): void;
}

interface IState {
  [key: string]: string;
}

export default class ContactForm extends Component<IProps, IState> {
  state = {
    name: "",
    number: "",
  };

  onInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={e => this.onSubmitContact(e)} className={ContactFormStl.ContactForm} id={nanoid()}>
        <label className={ContactFormStl.label}>
          Name
          <input
            type='text'
            value={name}
            onChange={e => this.onInputValue(e)}
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
