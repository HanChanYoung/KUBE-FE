import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import Index from "./page/index"
// import ReduxTestPage from './test/ReduxTestPage';
import Login from './page/Login';
import BoardListPage from './page/BoardListPage';
import BoardRsvdPage from './page/BoardRsvdPage';
import BoardCreatePage from './page/BoardCreatePage';
import Index from './page';
import LandingPage from './page/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardListPage/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="rtp" element={<ReduxTestPage/>}/> */}
        <Route path="/brp/:boardId" element={<BoardRsvdPage/>}/>
        <Route path="bcp" element={<BoardCreatePage/>}/>
        <Route path="index" element={<Index/>}/>
        <Route path="about" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
