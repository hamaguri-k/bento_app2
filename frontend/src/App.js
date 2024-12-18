import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Input } from './containers/Input';
import { Result } from './containers/Result';
import { Admin } from './containers/Admin';
import { List } from './containers/List';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
