import ContactListItem from "./ContactListItem/ContactListItem";
import ContactListStl from "./ContactListItem/ContactListItem.module.css";

export default function ContactsList({ visibleContacts, onRemoveItem }) {
  console.log(visibleContacts);
  return (
    <ul className={ContactListStl.contactList}>
      {visibleContacts.map(visibleContact => (
        <ContactListItem
          contact={visibleContact}
          onRemove={() => onRemoveItem(visibleContact.id)}
          key={visibleContact.id}
        />
      ))}
    </ul>
  );
}
