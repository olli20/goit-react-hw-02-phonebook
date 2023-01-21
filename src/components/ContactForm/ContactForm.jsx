import { Component } from 'react';
import { nanoid } from "nanoid";
import styles from './contact-form.module.scss';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({
          [name]: value,
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const {name, number} = this.state;
        const {contacts} = this.props;

        const isNameAlreadyHere = contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length;
        if(isNameAlreadyHere){
          alert(`${name} is already in contacts`);
          return;
        };
       
        const newContact = {
          name: name,
          number: number,
          id: nanoid(),
        }

        this.props.onSubmit(newContact);
        this.reset();
    }

    reset = () => {
        this.setState({ name: "", number: "", })
    }

    render() {
        const {name, number} = this.state;

        return (
            <form onSubmit={this.handleFormSubmit} className={styles.form}>
                <div className={styles.inputBlock}>
                    <label htmlFor="name" className={styles.name}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className={styles.inputBlock}>
                    <label htmlFor="number" className={styles.name}>Number</label>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleInputChange}
                    />
                </div>
                <button type="submit">Add contact</button>
            </form> 
    );}
}

export default ContactForm;