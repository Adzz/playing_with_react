import React from 'react';
import Radium from 'radium';
// import AutoComplete from 'material-ui/AutoComplete';
import Breadcrumb from '../../../components/navigation/breadcrumb/Breadcrumb';
import BrandsListContainer from '../../../containers/brandsList/BrandsListContainer';

// we need a notification component that reads from the error state to present any
// error that the request produces.

const BrandAndSuppliersHome = () => (
  <div>
    <Breadcrumb location={location} />
    <BrandsListContainer />
  </div>
);

export default Radium(BrandAndSuppliersHome);

    // <AutoComplete
    //   hintText="Type Brand Name to filter"
    //   onUpdateInput={handleUpdateInput()}
    // />
