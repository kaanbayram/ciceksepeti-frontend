import { Icon } from '@assets/svg';
import { getPrices } from '@common';
import { Basket, Search } from '@components';
import { IState, setSearchWord } from '@store';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styles from './assets/styles.scss';
import { SubHeader } from './components';
const debounce = require('lodash/debounce');

const FREE_DELIVERY_LIMIT = 500;

const Header = (props: any) => {

    const dispatch = useDispatch();
    const basket = useSelector((state: IState) => state.basket);

    const basketItemCount = useMemo(() => {
        let count = 0;
        basket.forEach((item) => {
            if (item.count) count = count + item.count;
        });
        return count;
    }, [basket]);

    const basketPrice: number = useMemo(() => {
        return getPrices(basket) as number;
    }, [basket]);

    const onChangeSearch = debounce((e: any) => {
        if (!e.target.value.length) {
            dispatch(setSearchWord(""));
        }
        else if (e.target.value && e.target.value.length >= 3) {
            dispatch(setSearchWord(e.target.value));
        }
    }, 300);


    return (
        <div className='layout'>
            <header className={[Styles.header].join(' ')}>
                <Icon iconName={"ciceksepeti"} />
                <Search onChangeSearch={onChangeSearch} />
                <Basket basketPrice={basketPrice} freeDeliveryLimit={FREE_DELIVERY_LIMIT} basketItemCount={basketItemCount} />
            </header>
            <SubHeader />
        </div>
    )
}
export default Header;