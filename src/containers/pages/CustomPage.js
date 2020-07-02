import React from 'react';
import SiteListContainer from '../SiteListContainer';
import BreadCrumb from '../../components/BreadCrumb';

const CustomPage = () => (
  <React.Fragment>
    <BreadCrumb
      items={[
        { title: '首页', path: '/' },
        { title: '自定义', path: '/custom', isActive: true },
      ]}
    />

    <SiteListContainer />
  </React.Fragment>
);

export default CustomPage;
