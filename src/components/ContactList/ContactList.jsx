import ContactListItem from './ContactListItem';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
            {
                contacts.map(({id, name, number}) => {
                     return <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact}/> 
                })
            }
        </ul>
    )
}

export default ContactList;