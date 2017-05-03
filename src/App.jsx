import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navigation/navbar/Navbar';
import DataManagementHome from './pages/dataManagement/DataManagementHome';

const App = () => (
  <BrowserRouter >
    <div>
      <Navbar />
      <Route path="/data_management" exactly component={DataManagementHome} />
    </div>
  </BrowserRouter>
);

export default App;
