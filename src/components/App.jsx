import { Component } from 'react';
import { nanoid } from "nanoid";
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import styles from './app.module.scss';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: "sdf",
    number: "dfg",
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  handleInputChange = event => {
    const {name, value} = event.currentTarget;
    this.setState({
      [name]: value,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {contacts, name, number} = this.state;

    const isNameAlreadyHere = contacts.filter(contact => contact.name === name).length;
    if(isNameAlreadyHere){
      alert('Вже є');
      return;
    };

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    }

    this.setState(prevState => {
      return {contacts: [...prevState.contacts, newContact]};
    });
  };
  
  render() {
    const {contacts, name, number} = this.state;
    return (
      <div className={styles.app}>
        <h1>Phonebook</h1>
        <ContactForm 
          name={name}
          number={number}
          onFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange} />

        <h2>Contacts</h2>
        <Filter  />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  } 
};

export default App;
