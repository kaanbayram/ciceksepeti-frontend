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

    const basketPrice: number = useMemo(() => {
        return getPrices(basket) as number;
    }, [basket]);
    /**
     * Open filter drawer for small or medium screens
     */
    function openFilterDrawer() {
        props.changeFilterDrawerStatus(true);
    }

    /**
     * Open basket drawer for small or medium screens
     */
    function openBasketDrawer() {
        props.changeBasketDrawerStatus(true);
    }

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
                <Icon
                    iconName={"ciceksepeti"}
                // iconClassName={[Styles.iconStyles, item.iconClassName].join(' ')}
                />
                <Search onChangeSearch={onChangeSearch} />
                <Basket basketPrice={basketPrice} freeDeliveryLimit={FREE_DELIVERY_LIMIT} />
            </header>
            <SubHeader />
        </div>
    )
}
export default Header;