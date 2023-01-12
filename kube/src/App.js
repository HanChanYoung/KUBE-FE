import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Index from "./page/index"
import ReduxTestPage from './test/ReduxTestPage';
import Login from './page/Login';
import BoardListPage from './page/BoardListPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* routing 예시 */}
      <Route path="/" element={<Index/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="rtp" element={<ReduxTestPage/>}/>
      <Route path="/boardlist" element={<BoardListPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
