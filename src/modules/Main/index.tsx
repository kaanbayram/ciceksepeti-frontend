
import React from 'react';
import { Categories, Discounts, Footer, Header, Products } from '..';
import * as Styles from './assets/styles.scss';

export default function Main() {
  return (
    <div className={Styles.mainStyles}>
      <Header />
      <Categories />
      <Products />
      <Discounts />
      <Footer />
    </div>
  )
}
