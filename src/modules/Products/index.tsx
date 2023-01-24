import { Icon } from '@assets/svg';
import { Localization } from '@common';
import { Product } from '@components';
import { BaseActionTypes, IState } from '@store';
import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styles from './assets/styles.scss';
import { IProducts } from './entities';

export default function Products(props: IProducts) {

    const dispatch = useDispatch();
    const products = useSelector((state: IState) => state.products) || []
    const spinning = useSelector((state: IState) => state.general.loading);
    const { category, searchWord } = useSelector((state: IState) => state.filters);
    const basketProducts = useSelector((state: IState) => state.basket) || [];


    useEffect(() => {
        dispatch({ type: BaseActionTypes.GET_PRODUCTS, payload: "" });
    }, []);


    const getProducts = () => {
        if (searchWord) {
            return products.filter(product => product.name.toLocaleLowerCase().indexOf(searchWord.toLocaleLowerCase()) >= 0).map(product => {
                const basketCount: number = basketProducts.find(basketProduct => basketProduct._id === product._id)?.count || 0;
                return <Product {...product} basketCount={basketCount} />;
            });
        }
        return products.filter(product => product.category === category || category === "all").map(product => {
            const basketCount: number = basketProducts.find(basketProduct => basketProduct._id === product._id)?.count || 0;
            return <Product {...product} basketCount={basketCount} />;
        });
    }

    return (
        <Spin spinning={spinning} size="large">
            <div className={[Styles.products, 'layout'].join(' ')}>
                <div className={Styles.producstContainer}>
                    <div className={Styles.productsHeader}>
                        <Icon iconName='leaf' />
                        <span>{Localization.localize('all')}</span>
                        <span>{Localization.localize("categories")}</span>
                    </div>
                    <div className={Styles.productList}>
                        {getProducts()}
                    </div>
                </div>
            </div>
        </Spin>
    )
}
