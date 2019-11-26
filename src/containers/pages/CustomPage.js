import React from 'react';
import SiteListContainer from '../SiteListContainer';
import BreadCrumb from '../../components/BreadCrumb';
import SEO from '../../components/SEO';

const CustomPage = () => (
  <div className="wrapper">
    <SEO title="自定义" />

    <BreadCrumb
      items={[
        { title: '首页', path: '/' },
        { title: '自定义', path: '/custom', isActive: true }
      ]}
    />

    <SiteListContainer />
  </div>
);

export default CustomPage;
