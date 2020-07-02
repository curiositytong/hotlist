import React from 'react';

const Item = ({ index, title, url, isMobileDevice }) => (
  <div className="b-item">
    <div className="item-container">
      <div className="item-content">
        <div className="item-no">{index + 1}.</div>
        {isMobileDevice ? (
          <a href={url}>{title}</a>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Item;
