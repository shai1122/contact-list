import React, { useEffect, useState, useCallback } from 'react';
import Card from '../card/card';
import './contacts.styles.scss';
import _ from 'lodash';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [hasFetchError, setHasFetchError] = useState(false);

  const url = 'https://retoolapi.dev/xJfD1o/data';
  const fetchData = async searchValue => {
    setHasFetchError(false);

    try{
      const data = await fetch(url);
      const dataJson = await data.json();
      const filteredData = dataJson.filter(item => {
        return item.name.includes(searchValue);
      });
      setContacts(filteredData);

    }
    catch(error){
      setHasFetchError(true);
      console.error(error);
    }

  };

  const handleChange = e => {
    fetchData(e.target.value);
  };

  const debounceChangeHandler = useCallback(_.debounce(handleChange, 500), []);
  useEffect(() => {
    return () => {
      debounceChangeHandler.cancel();
    };
  }, [debounceChangeHandler]);

  return (
    <>
      <div className="header">
        <h1 className="title">Contact List</h1>
        <input
          className="search-field"
          type="text"
          placeholder="search..."
          value={searchedValue}
          onChange={e => {
            setSearchedValue(e.target.value);
            debounceChangeHandler(e);
          }}
        ></input>
      </div>
      <div className="contacts">
        {contacts.map(contact => (
          <div>
            <Card contact={contact} />
          </div>
        ))}
      </div>
      {hasFetchError && <span>unable to fetch contacts </span>}
    </>
  );
}

export default Contacts;
