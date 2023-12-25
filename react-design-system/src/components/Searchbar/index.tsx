import React from "react";

const Searchbar = (props) => {
  return (
    <div id="searchContainer">
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <input
          name="search"
          id="search"
          value={props.value}
          className="block w-1/3 rounded-md border-0 mt-5 mb-1 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={props.placeholder}
          onChange={(event) => props.handleTextInput(event)}
        />
      </form>
    </div>
  );
};

export { Searchbar };
