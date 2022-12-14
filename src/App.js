import './App.css';
import Home from './pages/Home';
import UserDetailsFormPage from './pages/UserDetailsFormPage';
import UserSubscription from './pages/UserSubscription';
import ClientDetailsPage from './pages/ClientDetailsPage'
import PaymentPage from './components/PaymentPage';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-customer" element={<UserDetailsFormPage />} />
        <Route path="/user-subscription/:id" element={<UserSubscription />} />
        <Route path="/client-details/:id" element={<ClientDetailsPage />} />
        <Route path="/payment-details/:id/:fee/:batch" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
