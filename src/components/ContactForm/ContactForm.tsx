import React, { Component } from "react";
import { Formik } from "formik";
// Styles
import ContactFormStl from "./ContactForm.module.css";
interface IProps {
  onAddContact(name: string, number: string): void;
}

export default function ContactForm({ onAddContact }: IProps) {
  const onSubmitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { person, number } = event.currentTarget;
    onAddContact(person.value, number.value);
  };
  return (
    // <Formik>
    <form onSubmit={onSubmitContact} className={ContactFormStl.ContactForm}>
      <label className={ContactFormStl.label} htmlFor='person'>
        Name
        <input type='text' name='person' className={ContactFormStl.input} />
      </label>
      <label className={ContactFormStl.label} htmlFor='number'>
        Phone Number
        <input type='text' name='number' className={ContactFormStl.input} />
      </label>
      <button type='submit' className={ContactFormStl.buttonSubmit}>
        Add contact
      </button>
    </form>
    // </Formik>
  );
}
