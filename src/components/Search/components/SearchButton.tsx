import { Localization } from '@common';
import { Button } from 'antd';
import React from 'react';
import * as Styles from '../assets/styles.scss';

export default function SearchButton() {
    return (
        <Button className={Styles.searchButton}>
            {Localization.localize('search')}
        </Button>
    )
}
