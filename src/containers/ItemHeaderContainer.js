import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemHeader from '../components/ItemHeader';
import { setSiteSlug } from '../actions/sites';
import { fetchItems } from '../actions/items';

class ItemHeaderContainer extends Component {
  handleSetSiteSlug = slug => {
    const { setSiteSlug, fetchItems } = this.props;

    setSiteSlug(slug);
    fetchItems(slug);
  };

  render() {
    const { slug, sites } = this.props;

    return (
      <ItemHeader
        siteSlug={slug}
        sites={sites}
        onSetSiteSlug={this.handleSetSiteSlug}
      />
    );
  }
}

const mapStateToProps = state => ({
  slug: state.sites.slug,
  sites:
    state.sites.selectedSites.length > 0
      ? state.sites.selectedSites
      : state.sites.data
});

export default connect(mapStateToProps, { setSiteSlug, fetchItems })(
  ItemHeaderContainer
);
