import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import routes from './routes';
import Loading from './components/Loading';
import Header from './components/Header';
import { setSiteSlug, fetchSites } from './actions/sites';
import { fetchItems } from './actions/items';

class App extends Component {
  componentDidMount() {
    const { slug, setSiteSlug, fetchSites, fetchItems } = this.props;

    fetchSites().then((resp) => {
      if (!slug) {
        setSiteSlug(resp.payload[0].slug);
        fetchItems(resp.payload[0].slug);
      } else {
        fetchItems(slug);
      }
    });
  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="container">
          <div className="wrapper">
            <Switch>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  exact={!!route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => ({
  slug: state.sites.slug,
});

export default connect(mapStateToProps, {
  setSiteSlug,
  fetchSites,
  fetchItems,
})(App);
