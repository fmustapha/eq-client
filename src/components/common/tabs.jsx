import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({ selectedSection, sections, onSelect }) => {
  return (
    <ul className="nav nav-tabs">
      {sections.map((section, index) => (
        <li
          className="nav-item"
          key={index}
        >
          <Link className={
            selectedSection === section ? `nav-link active` : `nav-link`
          } to={`/home/${section.toLowerCase()}`} onClick={()=>{onSelect(section)}}>{section}</Link>
        </li>
      )) }
    </ul>
  );
};

export default Tabs;
