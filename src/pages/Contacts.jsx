import { selectFilters } from 'redux/filter/selectors';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { StyledTitle } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const filter = useSelector(selectFilters);
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && (
        <div>
          <b>Error! Please reload the page or try later!</b>
        </div>
      )}
      {isLoading && (
        <div>
          <b>Loading...</b>
        </div>
      )}
      {filteredContacts.length ? (
        <>
          <StyledTitle>Find contacts by name</StyledTitle>
          <ContactList items={filteredContacts} />
        </>
      ) : (
        <StyledTitle>There are no contacts yet!</StyledTitle>
      )}
    </div>
  );
};

export default Contacts;
