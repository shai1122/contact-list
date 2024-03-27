import React, { useEffect, useState } from "react";
import Card from "./card";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const url = "https://retoolapi.dev/xJfD1o/data";
  const fetchData = async () => {
    const data = await fetch(url);
    const dataJson = await data.json();

    setContacts(dataJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  contacts.map((contact) => {
    return (
      <div>
        <Card contact={contact} />
      </div>
    );
  });
}

export default Contacts;
