import { Icon } from '@assets/svg';
import { Localization } from '@common';
import { Button, Popover, Progress } from 'antd';
import React, { useState } from 'react';
import * as Styles from "./assets/styles.scss";

export default function Basket() {

    const [barWidth, setBarWidth] = useState<string>("40px");

    const setPercent = () => {
        setBarWidth("80px");
    }

    const PopoverContent = () => {
        return (
            <div className={Styles.shipmentContainer}>
                <div className={Styles.shipmentHeaderStyles}>
                    <Icon iconName='lightning' />
                    <span className={Styles.leftingShipmentPrice} onClick={setPercent} >50 TL</span>
                    <span className={Styles.leftingShipmentText}>{Localization.localize('basketPromotionMessage')}</span>
                </div>
                <div className={Styles.loadBarContainer}>
                    <div className={Styles.loadBar}>
                        <div className={Styles.loadBarFullfilled} style={{ width: barWidth }}></div>
                    </div>
                    {/* <Progress percent={barWidth} showInfo={false}  /> */}
                </div>
            </div>
        );
    }

    return (
        <Popover
            content={<PopoverContent />}
            title=""
            trigger="click"
            popupVisible={true}
            defaultOpen={true}
            placement={"bottomRight"}
            open={true}
            overlayClassName={Styles.popoverOverlay}
            arrowPointAtCenter
        >
            <Button className={Styles.basketButton} >
                <Icon iconName='basketIcon' />
                <span>{Localization.localize('basket')}</span>
            </Button>
        </Popover>
    )
}
