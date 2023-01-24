import { Icon } from '@assets/svg'
import { Localization } from '@common'
import React from 'react';
import * as Styles from './assets/styles.scss';
import { CategoryList } from './components';
import { Breadcrumb, Spin } from 'antd';
import { ICategoryProps } from './entities';
import { useSelector } from 'react-redux';
import { IState } from '@store';

export default function Categories(props: ICategoryProps) {

    const spinning = useSelector((state: IState) => state.general.loading);

    return (
        <Spin spinning={spinning} size="large">
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
        </Spin>
    )
}
