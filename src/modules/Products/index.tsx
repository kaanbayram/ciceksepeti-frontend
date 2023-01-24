import { Icon } from '@assets/svg';
import { Localization } from '@common';
import { Product } from '@components';
import React from 'react';
import * as Styles from './assets/styles.scss';

export default function Products() {
    return (
        <div className={[Styles.products, 'layout'].join(' ')}>
            <div className={Styles.producstContainer}>
                <div className={Styles.productsHeader}>
                    <Icon iconName='leaf' />
                    <span>{"Tüm"}</span>
                    <span>{Localization.localize("categories")}</span>
                </div>
                <div className={Styles.productList}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}
