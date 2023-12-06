import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo.svg';
import CartWidget from './CartWidget'

function NavBar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       
      <div className="container">
      <img src={logo}           style={{ width: '70px', height: '70px' }} className="" alt="logo" />
<a className="navbar-brand" href="/">Loja teste coder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">Promoçoes </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">eletrodomésticos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">informática</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">móveis</a>
            </li>
          </ul>
       
        </div>
        <CartWidget />

      </div>
    </nav>
 
 );
}
export default NavBar;
