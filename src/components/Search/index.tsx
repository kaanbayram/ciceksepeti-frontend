import { Icon } from '@assets/svg';
import { Localization } from '@common';
import { Input } from 'antd';
import React from 'react'
import * as Styles from './assets/styles.scss';
import { SearchButton } from './components';
import { ISearchProps } from './entites';

export default function Search(props: ISearchProps) {

    return (<Input onChange={props.onChangeSearch} className={Styles.searchStyles} placeholder={Localization.localize("searchProduct")} prefix={<Icon iconName='searchIcon' />} suffix={<SearchButton />} />);
}
