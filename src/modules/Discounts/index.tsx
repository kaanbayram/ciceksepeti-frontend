import { Icon } from '@assets/svg';
import { Button } from 'antd';
import React from 'react';
import * as Styles from './assets/styles.scss';

const CardContent = () => {
    return (
        <div>
            <span>

            </span>
            <Button>

            </Button>
        </div>
    );
}

export default function Discounts() {
    return (
        <div className={[Styles.discountContainer, 'layout'].join(' ')}>
            <div className={Styles.discountStyles}>
                <div>
                    <img src='./images/discount3.png' />
                    <div>
                        <span>
                            75 TL Üzerine Teslimat Ücreti Bizden
                        </span>
                        <Button>
                            Detaylı Bilgi
                        </Button>
                    </div>
                </div>
                <div>
                    <img src='./images/discount2.png' />
                    <div>
                        <span>
                            Hediye Kategorisi için Sepette %15 İndirim
                        </span>
                        <Button>
                            Hediye Ürünleri
                        </Button>
                    </div>
                </div>
                <div>
                    <img src='./images/discount1.png' />
                    <div>
                        <span>
                            Kırtasiye Kategorisi için Sepette %15 İndirim
                        </span>
                        <Button>
                            Detaylı Bilgi
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
