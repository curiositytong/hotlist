import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsContainer from '../ItemsContainer';
import { setSiteSlug } from '../../actions/sites';
import { fetchItems } from '../../actions/items';

class IndexPage extends Component {
  componentDidMount() {
    const { slug, selectedSites, setSiteSlug, fetchItems } = this.props;

    if (
      selectedSites.length > 0 &&
      selectedSites.map((site) => site.slug).indexOf(slug) < 0
    ) {
      console.log(selectedSites);
      setSiteSlug(selectedSites[0].slug);
      fetchItems(selectedSites[0].slug);
    }
  }

  render() {
    return (
      <React.Fragment>
        <ItemsContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  slug: state.sites.slug,
  selectedSites: state.sites.selectedSites,
});

export default connect(mapStateToProps, { setSiteSlug, fetchItems })(IndexPage);
