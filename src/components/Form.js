import React, { useState } from "react";
import store from "../index.js";

const Form = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const changeHandler = e => {
    setSearchQuery(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const baseUrl = "https://hn.algolia.com/api/v1/search?query=";
    const tags = "&tags=story";

    const res = await fetch(baseUrl + searchQuery + tags);
    const data = await res.json();

    storeResults(data);
  };

  // send action to store
  const storeResults = ({ hits: results }) => {
    store.dispatch({
      type: "ADD",
      searchQuery,
      results,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder='Getting hired during a pandemic'
        onChange={changeHandler}
        style={{ marginRight: "1rem" }}
      />

      <button type='SUBMIT'>Search</button>
    </form>
  );
};

export default Form;
