import React from 'react';
import Item from './Item';
import ItemHeaderContainer from '../containers/ItemHeaderContainer';

const Items = ({ items, isMobileDevice }) => (
  <div className="list">
    <div className="list-item items-header">
      <ItemHeaderContainer />
    </div>
    {items.map((item, index) => (
      <div key={item.id} className="list-item">
        <Item
          index={index}
          title={item.title}
          url={item.url}
          isMobileDevice={isMobileDevice}
        />
      </div>
    ))}
  </div>
);

export default Items;
