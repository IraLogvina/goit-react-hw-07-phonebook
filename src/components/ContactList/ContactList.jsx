import React from "react";
import style from "./ContactList.module.css";
// import PropTypes from "prop-types";
// import actions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { visibleContacts } from '../../redux/selectors';
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../redux/operations";

// const ContactList = ({ contacts, onDelete }) => {

export default function ContactList() {
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchContacts()), [dispatch])
  const list = useSelector(visibleContacts)

  return (
    <ul className={style.list}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={style.listItem}>
          <span className={style.listItemName}>{name}:</span>
          <span className={style.listItemNumber}>{number}</span>
          <button
            type="button"
            className={style.button}
            // onClick={() => onDelete(id)}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
//   onClick: PropTypes.func.isRequired,
// };

// const visibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

// redux

// const visibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: visibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: (id) => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
