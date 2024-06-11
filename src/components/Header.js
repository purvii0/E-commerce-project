import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector(state => state.cart.cartCount);

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>E-Commerce Site</h1>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/checkout" style={styles.link}>Checkout ({cartCount})</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#14213d',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  title: {
    margin: 0,
  },
  link: {
    margin: '0 3rem 0 0',
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Header;
