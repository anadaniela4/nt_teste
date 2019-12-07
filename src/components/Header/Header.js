import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import { ReactComponent as Logo } from '../../shared/assets/icon/logo.svg';

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="w-100 text-center">
        <Logo className='logo' />
      </Link>
    </header>
  );
}
