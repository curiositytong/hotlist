import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteList from '../components/SiteList';
import { setSelectedSites } from '../actions/sites';

class SiteListContainer extends Component {
  handleSelectSite = site => {
    const { selectedSites, setSelectedSites } = this.props;

    const index = selectedSites.map(site => site.id).indexOf(site.id);
    if (index >= 0) {
      selectedSites.splice(index, 1);
    } else {
      selectedSites.push(site);
    }
    setSelectedSites([...selectedSites]);
  };

  render() {
    const { sites, selectedSites } = this.props;

    return (
      <SiteList
        sites={sites}
        selectedSites={selectedSites}
        onSelectSite={this.handleSelectSite}
      />
    );
  }
}

const mapStateToProps = state => ({
  selectedSites: state.sites.selectedSites,
  sites: state.sites.data
});

export default connect(mapStateToProps, { setSelectedSites })(
  SiteListContainer
);
