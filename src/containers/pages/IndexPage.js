import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsContainer from '../ItemsContainer';
import { setSiteId } from '../../actions/sites';
import { fetchItems } from '../../actions/items';
import SEO from '../../components/SEO';

class IndexPage extends Component {
  componentDidMount() {
    const { siteId, selectedSites, setSiteId, fetchItems } = this.props;

    if (
      selectedSites.length > 0 &&
      selectedSites.map(site => site.id).indexOf(siteId) < 0
    ) {
      console.log(selectedSites);
      setSiteId(selectedSites[0].id);
      fetchItems(selectedSites[0].id);
    }
  }

  render() {
    return (
      <div className="wrapper">
        <SEO title="首页" />
        <ItemsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  siteId: state.sites.siteId,
  selectedSites: state.sites.selectedSites
});

export default connect(mapStateToProps, { setSiteId, fetchItems })(IndexPage);
