import { Link } from 'react-router-dom';
import './CSS/Layout.css';

export const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li><Link to="/input">入力</Link></li>
            <li><Link to="/result">結果</Link></li>
            <li><Link to="/list">一覧</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="footer">
        © 2025 konendaini bento
      </footer>
    </div>
  );
};