import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import Sidebar from './components/sidebar/Sidebar';
import Explore from './pages/Explore/Explore';
import Products from './pages/Products/Products';
import Charts from './pages/Charts/Charts';
import Trends from './pages/Trends/Trends';
import Contact from './pages/Contact/Contact';
import Billing from './pages/Billing/Billing';

const App = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/products' element={<Products />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/billing' element={<Billing />} />
        </Routes>
      </div>

    </>
  );
}

export default App