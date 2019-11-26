import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemHeader from '../components/ItemHeader';
import { setSiteId } from '../actions/sites';
import { fetchItems } from '../actions/items';

class ItemHeaderContainer extends Component {
  handleSetSiteId = siteId => {
    const { setSiteId, fetchItems } = this.props;

    setSiteId(siteId);
    fetchItems(siteId);
  };

  render() {
    const { siteId, sites } = this.props;

    return (
      <ItemHeader
        siteId={siteId}
        sites={sites}
        onSetSiteId={this.handleSetSiteId}
      />
    );
  }
}

const mapStateToProps = state => ({
  siteId: state.sites.siteId,
  sites:
    state.sites.selectedSites.length > 0
      ? state.sites.selectedSites
      : state.sites.data
});

export default connect(mapStateToProps, { setSiteId, fetchItems })(
  ItemHeaderContainer
);
