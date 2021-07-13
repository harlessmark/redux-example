import React, { useState } from "react";
import store from "../index.js";

const Form = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const changeHandler = e => {
    setSearchQuery(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const baseUrl = "https://hn.algolia.com/api/v1/search?query=";
    const tags = "&tags=story";

    const res = await fetch(baseUrl + searchQuery + tags);
    const { hits: results } = await res.json();

    // send action to store
    store.dispatch({
      type: "ADD_RESULTS",
      results
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
