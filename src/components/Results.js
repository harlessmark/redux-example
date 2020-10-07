import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
  const results = useSelector(state => state.results);

  const result = item => (
    <li key={item._tags[2]}>
      <a href={item.url} target='_blank' rel='noopener noreferrer'>
        {item.title}
      </a>
    </li>
  );

  return <ol>{results && results.map(item => result(item))}</ol>;
};

export default Results;
