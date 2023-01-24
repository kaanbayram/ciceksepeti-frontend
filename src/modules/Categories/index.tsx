import { Icon } from '@assets/svg'
import { Localization } from '@common'
import React from 'react';
import * as Styles from './assets/styles.scss';
import { CategoryList } from './components';
import { Breadcrumb } from 'antd';

export default function Categories() {
    return (
        <div className='layout'>

            <div className={Styles.categoriesContainer}>

                <div>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><a href="#">Ciceksepeti Market</a></Breadcrumb.Item>
                        <Breadcrumb.Item> <a href="#">İstanbul</a></Breadcrumb.Item>
                        <Breadcrumb.Item> <a className={Styles.lastestBreadCrumbItem} href="#">Ciceksepeti</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className={Styles.categoriesHeader}>
                    <Icon iconName='listIcon' />
                    <span>
                        {Localization.localize('categories')}
                    </span>
                </div>

                <CategoryList />
            </div>

        </div>
    )
}
