import React, { useEffect, useState, useCallback } from 'react';
import Card from '../card/card';
import './contacts.styles.scss';
import _ from 'lodash';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');

  const url = 'https://retoolapi.dev/xJfD1o/data';
  const fetchData = async searchValue => {
    const data = await fetch(url);
    const dataJson = await data.json();
    const filteredData = dataJson.filter(item => {
      return item.name.includes(searchValue);
    });
    setContacts(filteredData);
  };

  const handleChange = e => {
    console.log('the value is:', e.target.value);
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
      <div>
        <input
          type="text"
          value={searchedValue}
          onChange={e => {
            setSearchedValue(e.target.value);
            debounceChangeHandler(e);
          }}
        ></input>
      </div>
      <div class="contacts">
        {contacts.map(contact => (
          <div>
            <Card contact={contact} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Contacts;
