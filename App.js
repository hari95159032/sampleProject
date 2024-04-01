
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Admin from './Components/Admin';
import Demo1 from './Components/Demo1';
import Demo2 from './Components/Demo2';
import Demo3 from './Components/Demo3';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import MatchNotFound from './Components/MatchNotFound';
import SideBar from './Components/SideBar';
import UserInfo from './Components/UserInfo';
import UserPage from './Components/UserPage';

function App() {
  return (
    <div className="container-fluid">
      <div class="row " >
        <div class="col">
          <Header></Header>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3" >
          <SideBar></SideBar>
        </div>
        <div class="col-sm-9">
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route path='/demo1' element={<Demo1></Demo1>}></Route>
              <Route path='/demo2' element={<Demo2></Demo2>}></Route>
              <Route path='/demo3' element={<Demo3></Demo3>}></Route>
            </Route>
            <Route path='/user' element={<UserPage />}></Route>
            <Route path='user/:userId' element={<UserInfo />}></Route>
            <Route path='user/admin' element={<Admin />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path="*" element={<MatchNotFound />}></Route>


          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
