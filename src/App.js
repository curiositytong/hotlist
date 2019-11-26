import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import routes from './routes';
import Loading from './components/Loading';
import Header from './components/Header';
import { setSiteId, fetchSites } from './actions/sites';
import { fetchItems } from './actions/items';

class App extends Component {
  componentDidMount() {
    const { siteId, setSiteId, fetchSites, fetchItems } = this.props;

    fetchSites().then(resp => {
      if (!siteId) {
        setSiteId(resp.payload[0].id);
        fetchItems(resp.payload[0].id);
      } else {
        fetchItems(siteId);
      }
    });
  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <div className="has-navbar-fixed-top">
          <Header />
          <div className="container">
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

const mapStateToProps = state => ({
  siteId: state.sites.siteId
});

export default connect(mapStateToProps, { setSiteId, fetchSites, fetchItems })(
  App
);
