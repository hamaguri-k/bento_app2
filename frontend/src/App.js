import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Input } from './containers/Input';
import { Result } from './containers/Result';
import { Admin } from './containers/Admin';
import { List } from './containers/List';
import { Layout } from './containers/Layout';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/input" element={<Input />} />
          <Route path="/result" element={<Result />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
