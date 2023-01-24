import { Localization } from '@common';
import { changeCategory, IState } from '@store';
import { Button } from 'antd';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styles from '../assets/styles.scss';
import { ICategoryItemProps } from '../entities';
const classNames = require('classnames');
const cx = classNames.bind(Styles);

export default function CategoryItem(props: ICategoryItemProps) {

    const dispatch = useDispatch();

    const category = useSelector((state: IState) => state.filters.category) || "all";

    const onChangeCategory = () => {
        dispatch(changeCategory(props.categoryName));
    }

    return (
        <Button className={[Styles.categoryItem, category === props.categoryName ? Styles.selectedCategory : ""].join(' ')} onClick={onChangeCategory}>
            {Localization.localize(props.categoryName)}
        </Button>
    )
}
