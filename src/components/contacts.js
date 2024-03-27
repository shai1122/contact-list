import React, { useEffect, useState } from "react";
import Card from "./card";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const url = "https://retoolapi.dev/xJfD1o/data";
  const fetchData = async () => {
    const data = await fetch(url);
    const dataJson = await data.json();
    console.log(dataJson);
    console.log("aaaaa");
 
    setContacts(dataJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return ( 
  <div>
    {contacts.map((contact) => (
        <div>
          <Card data={contact} />
        </div>
  ))}
  

  </div>);
}

export default Contacts;
