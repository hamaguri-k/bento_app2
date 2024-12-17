import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Input } from './containers/Input';
import { Result } from './containers/Result';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
