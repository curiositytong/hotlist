import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ items }) => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      {items.map((item, index) => (
        <li className={item['isActive'] ? 'is-active' : ''}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default BreadCrumb;
