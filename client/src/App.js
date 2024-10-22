import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Layout from './components/Layout';
import DashboardAdmin from './pages/DashboardAdmin';
import RequireAuth from './components/RequireAuth';
import Keuangan from './pages/Keuangan';
import SuratCreate from './features/surat/SuratCreate'
import SuratList from './features/surat/SuratList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/keuangan" element={<Keuangan />} />

        <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
          <Route path='/dashboardadmin' element={<DashboardAdmin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["User"]} />}>
          <Route path='/suratpengantar' element={<SuratCreate />} />
          <Route path='/cekstatussurat' element={<SuratList />} />
        </Route>
      
      </Route>
    </Routes>
    
  );
}

export default App;
