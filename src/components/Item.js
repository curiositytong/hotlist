import React from 'react';

const Item = ({ index, title, url }) => (
  <div className="b-item">
    <div className="item-container">
      <div className="item-content">
        <div className="item-no">{index + 1}.</div>
        <a href={url}>{title}</a>
      </div>
    </div>
  </div>
);

export default Item;
