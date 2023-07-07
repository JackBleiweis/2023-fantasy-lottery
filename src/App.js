import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Chase from './Chase';
import Ben from './Ben';
import Brandon from './Brandon';
import Dustin from './Dustin';
import Jack from './Jack';
import Jake from './Jake';
import Matthew from './Matthew';
import Michael from './Michael';
import Ty from './Ty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
        <Link style={{ top: "10px", left: "50px" }} to={"/chase"}>
          Chase
        </Link>
        <Link style={{ top: "80px", left: "50px" }} to={"/ben"}>
          Ben
        </Link>
        <Link style={{ top: "150px", left: "50px" }} to={"/jake"}>
          Jake
        </Link>
        <Link style={{ top: "220px", left: "50px" }} to={"/dustin"}>
          Dustin
        </Link>
        <Link style={{ top: "300px", left: "50px" }} to={"/Matthew"}>
          Matthew
        </Link>
        <Link style={{ top: "360px", left: "50px" }} to={"/jack"}>
          Jack
        </Link>
        <Link style={{ top: "440px", left: "50px" }} to={"/michael"}>
          Michael
        </Link>
        <Link style={{ top: "500px", left: "50px" }} to={"/brandon"}>
          Brandon
        </Link>
        <Link style={{ top: "650px", left: "50px" }} to={"/ty"}>
          Ty
        </Link>
        <Routes>
          <Route path="/chase" element={<Chase />} />
          <Route path="/ben" element={<Ben />} />
          <Route path="/brandon" element={<Brandon />} />
          <Route path="/dustin" element={<Dustin />} />
          <Route path="/jack" element={<Jack />} />
          <Route path="/jake" element={<Jake />} />
          <Route path="/matthew" element={<Matthew />} />
          <Route path="/michael" element={<Michael />} />
          <Route path="/ty" element={<Ty />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
