import React from "react";
import _ from "lodash";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Pagination = ({ pageCount, pageSize, onPageChange, currentPage }) => {
  const pagesNum = Math.ceil(pageCount / pageSize);
  if (pagesNum === 1) return null;
  const pages = _.range(1, pagesNum + 1);
  return (
    <nav>
      <ul className="pagination">
        
        {pages.map((page, i) => (
          <li className={page === currentPage ? "page-item active" : "page-item"} key={i}>
            <Link className="page-link" onClick={() => onPageChange(page)} to="#">
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};


Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination;
