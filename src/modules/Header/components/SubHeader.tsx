import React from 'react'
import * as Styles from '../assets/styles.scss';

export default function SubHeader() {
    return (
        <div className={['layout', Styles.subHeader].join(' ')}>
            <div>
                <h1>ÇiçekSepeti</h1>
            </div>
            <img src={'./images/bar.jpeg'} />
        </div>
    )
}
