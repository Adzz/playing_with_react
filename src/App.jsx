import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import Navbar from './components/navigation/navbar/Navbar';
import DataManagementHome from './pages/dataManagement/Home';
import OrderCreationHome from './pages/orderCreation/Home';
import BrandAndSuppliersHome from './pages/dataManagement/brandsAndSuppliers/Home';
import SeasonsHome from './pages/dataManagement/seasons/Home';
import ColoursHome from './pages/dataManagement/colours/Home';
import SurfdomeSizesHome from './pages/dataManagement/surfdomeSizes/Home';
import SizeMappingHome from './pages/dataManagement/sizeMapping/Home';
import TaxonManagerHome from './pages/dataManagement/taxonManager/Home';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route
          path="/data_management/taxon_manager"
          component={TaxonManagerHome}
        />
        <Route
          path="/data_management/size_mapping"
          component={SizeMappingHome}
        />
        <Route
          path="/data_management/surfdome_sizes"
          component={SurfdomeSizesHome}
        />
        <Route
          path="/data_management/colours"
          component={ColoursHome}
        />
        <Route
          path="/data_management/seasons"
          component={SeasonsHome}
        />
        <Route
          path="/data_management/brands_and_suppliers"
          component={BrandAndSuppliersHome}
        />
        <Route
          path="/data_management"
          exactly
          component={DataManagementHome}
        />
      </Switch>
      <Route
        path="/order_creation"
        exactly
        component={OrderCreationHome}
      />
    </div>
  </BrowserRouter>
);

export default App;
