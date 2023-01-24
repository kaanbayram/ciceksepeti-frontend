import { Basket, Localization } from '@common';
import { addProduct, setBasket } from '@store';
import { Button } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Styles from './assets/styles.scss';
import { IProductProps } from './entities';

export default function Product(props: IProductProps) {

    const dispatch = useDispatch();

    const onClickIncreaseProduct = () => {
        const newBasket = Basket.addToBasket({ _id: props._id, name: props.name, price: props.price });
        dispatch(setBasket(newBasket));
    }

    const onClickDecreaseProduct = () => {
        // dispatch(addProduct({ _id: props._id, name: props.name, price: props.price }));
        const newBasket = Basket.deleteFromBasket(props._id);
        dispatch(setBasket(newBasket));
    }

    const getProductButton = () => {
        if (props.basketCount) {
            return (
                <div>
                    <Button onClick={onClickDecreaseProduct}>-</Button>
                    <span>{props.basketCount}</span>
                    <Button onClick={onClickIncreaseProduct}>+</Button>
                </div>
            );
        }
        return (
            <Button ghost onClick={onClickIncreaseProduct} type='primary'>{Localization.localize('addToBasket')}</Button>
        )
    }

    return (
        <div className={Styles.product}>
            <img src={`./images/product.png`} />
            <span className={Styles.productName}>{`${props.name}`}</span>
            <span className={Styles.productShipment}>{Localization.localize('freeDelivery')}</span>
            {getProductButton()}
        </div>
    )
}
