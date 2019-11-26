import React from 'react';

const SiteList = ({ selectedSites, sites, onSelectSite }) => (
  <div className="b-sites list">
    {sites.map(item => (
      <div
        key={item.id}
        className={`list-item${
          selectedSites.map(site => site.id).indexOf(item.id) >= 0
            ? ' is-active'
            : ''
        }`}
        onClick={() => onSelectSite(item)}
      >
        {item.title}
        {selectedSites.map(site => site.id).indexOf(item.id) >= 0 && (
          <div className="site-no">
            <span className="tag is-danger">
              {selectedSites.map(site => site.id).indexOf(item.id) + 1}
            </span>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default SiteList;
