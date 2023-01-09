import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Index from "./page/index"
import ReduxTestPage from './test/ReduxTestPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* routing 예시 */}
      <Route path="/" element={<Index/>}/>
      <Route path="rtp" element={<ReduxTestPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
