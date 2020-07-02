import React from 'react';
import { Link } from 'react-router-dom';

const ItemHeader = ({ siteSlug, sites, onSetSiteSlug }) => (
  <div className="b-item">
    <div className="item-container">
      <div className="item-content">
        {sites.map(item => (
          <span
            key={item.id}
            className={`tag ${item.slug === siteSlug ? 'is-link' : 'is-white'}`}
            onClick={() => onSetSiteSlug(item.slug)}
          >
            {item.title}
          </span>
        ))}
        <Link className="last" to="/custom">
          <span className="icon is-small">
            <i className="fas fa-cog"></i>
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default ItemHeader;
