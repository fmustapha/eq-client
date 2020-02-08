import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ selectedItem, onGenreSelect, sections }) => {
  return (
    <ul className="nav nav-tabs">
      {sections.map((section, index) => (
        <li className="nav-item" key={index}>
          <a key={index} className="nav-link active" href="#">
            {section}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
