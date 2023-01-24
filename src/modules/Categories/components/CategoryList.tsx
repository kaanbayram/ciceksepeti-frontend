import { IState } from '@store';
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { CategoryItem } from '.';
import * as Styles from '../assets/styles.scss';
import { ICategoryListProps } from '../entities';

export default function CategoryList(props: ICategoryListProps) {

    const products = useSelector((state: IState) => state.products) || []

    const categories: string[] = useMemo(() => {
        const productCategories: string[] = ["all"];
        products.forEach(product => {
            if (product.category && !productCategories.includes(product.category)) {
                productCategories.push(product.category);
            }
        });
        return productCategories;
    }, [products]);

    const getCategoryItem = () => {
        return categories.map(category => <CategoryItem categoryName={category} />);
    }

    return (
        <div className={Styles.categoryList}>
            {getCategoryItem()}
        </div>
    )
}
