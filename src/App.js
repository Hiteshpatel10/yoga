import './App.css';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import UserSubscription from './pages/UserSubscription';
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
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/addCustomer" element={<UserDetails />} />
        <Route path="/" element={<UserSubscription />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
