import { Icon } from '@assets/svg';
import { Basket, Search } from '@components';
import React from 'react';
import * as Styles from './assets/styles.scss';
import { SubHeader } from './components';

const Header = (props: any) => {


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


    return (
        <div className='layout'>
            <header className={[Styles.header].join(' ')}>
                <Icon
                    iconName={"ciceksepeti"}
                // iconClassName={[Styles.iconStyles, item.iconClassName].join(' ')}
                />
                <Search />
                <Basket />
            </header>
            <SubHeader />
        </div>
    )
}
export default Header;