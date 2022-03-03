import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
import { GiCoffeeBeans } from 'react-icons/gi';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <header onClick={() => navigate('/')}>
      <GiCoffeeBeans className="page-icon" alt="three coffee beans" aria-hidden="true" />
      <h1>sunday</h1>
    </header>
  )
}

export default Nav;
