import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css';
import Navbar from './components/navigation/navbar/Navbar';
import DataManagementHome from './pages/dataManagement/Home';
import OrderCreationHome from './pages/orderCreation/Home';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route
        path="/data_management"
        exactly
        component={DataManagementHome}
      />
      <Route
        path="/order_creation"
        exactly
        component={OrderCreationHome}
      />
    </div>
  </BrowserRouter>
);

export default App;
