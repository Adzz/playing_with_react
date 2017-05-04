import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css';
import Navbar from './components/navigation/navbar/Navbar';
import DataManagementHome from './pages/dataManagement/DataManagementHome';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <BrowserRouter basename="/data_management" >
        <Route
          path="/"
          component={DataManagementHome}
        />
      </BrowserRouter>
    </div>
  </BrowserRouter>
);

export default App;
