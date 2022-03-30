import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MaterialTailwind from './components/MaterialTailwind/MaterialTailwind';
import Notus from './components/Notus/Notus';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/notus' element={<Notus></Notus>}></Route>
        <Route path='/materialTailwind' element={<MaterialTailwind></MaterialTailwind>}></Route>
      </Routes>
    </div>
  );
}

export default App;
