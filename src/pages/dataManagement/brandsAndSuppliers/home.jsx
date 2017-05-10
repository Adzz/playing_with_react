import React from 'react';
import Radium from 'radium';
import Breadcrumb from '../../../components/navigation/breadcrumb/Breadcrumb';

const BrandAndSuppliersHome = () => (
  <div>
    <Breadcrumb location={location} />
  </div>
);

export default Radium(BrandAndSuppliersHome);
