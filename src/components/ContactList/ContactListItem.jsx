import PropTypes from 'prop-types';

import { BsFillXSquareFill } from "react-icons/bs";

import styles from './contact-list.module.scss';

const ContactListItem = ({id, name, number, onDeleteContact}) => {
    return (
        <li>
            <span>{name}: </span><span>{number}</span>
            <button onClick={() => onDeleteContact(id)} type="button" className={styles.btn}>
                Delete <BsFillXSquareFill />
            </button>
        </li>
    );
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}