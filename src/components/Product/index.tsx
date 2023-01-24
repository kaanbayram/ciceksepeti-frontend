import { Localization } from '@common';
import { Button } from 'antd';
import React from 'react'
import * as Styles from './assets/styles.scss';

export default function Product() {


    const getButton = () => {
        return (
            <div>
                <Button>-</Button>
                <span>3</span>
                <Button>+</Button>
            </div>
        );
    }

    return (
        <div className={Styles.product}>
            <img src={`./images/product.png`} />
            <span className={Styles.productName}>Gold Çizgili Vazoda 2 Dal Orkide Çiçeği</span>
            <span className={Styles.productShipment}>{'Ücretsiz Teslimet'}</span>
            <span className={Styles.productPrice}>249,90 TL</span>
            {/* <Button ghost type='primary'>{Localization.localize('addToBasket')}</Button> */}
            {getButton()}
        </div>
    )
}
