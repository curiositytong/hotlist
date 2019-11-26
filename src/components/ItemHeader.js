import React from 'react';
import { Link } from 'react-router-dom';

const ItemHeader = ({ siteId, sites, onSetSiteId }) => (
  <div className="b-item">
    <div className="item-container">
      <div className="item-content">
        {sites.map(item => (
          <span
            key={item.id}
            className={`tag ${item.id === siteId ? 'is-link' : 'is-white'}`}
            onClick={() => onSetSiteId(item.id)}
          >
            {item.title}
          </span>
        ))}
        <span className="tag last">
          <Link to="/custom">自定义</Link>
        </span>
      </div>
    </div>
  </div>
);

export default ItemHeader;
