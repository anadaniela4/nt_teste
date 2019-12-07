import React from 'react';
import './Loader.scss'
import { ReactComponent as LoaderLogo } from '../../assets/icon/loader.svg';

const Loader = props => (
  <div data-testid='loader' className="loader">
    <LoaderLogo className='loader-logo' />
  </div>
);

export default Loader;
