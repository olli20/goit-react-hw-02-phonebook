import styles from './contact-form.module.scss';

const ContactForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.inputBlock}>
                <label htmlFor="name" className={styles.name}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
            </div>
            <div className={styles.inputBlock}>
                <label htmlFor="number" className={styles.name}>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </div>
            <button type="submit">Add contact</button>
        </form>
    )
}

export default ContactForm;