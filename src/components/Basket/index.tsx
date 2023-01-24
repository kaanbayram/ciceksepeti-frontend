import { Icon } from '@assets/svg';
import { Localization } from '@common';
import { Button, Popover, Progress } from 'antd';
import React, { useMemo, useState } from 'react';
import * as Styles from "./assets/styles.scss";
import { IBasketProps } from './entities';

export default function Basket(props: IBasketProps) {

    const [leftingPrice, setLeftingPrice] = useState<number>();


    const getLeftingPriceText = () => {
        const amount = props.freeDeliveryLimit - Number(props.basketPrice);
        if ((amount > 0 && amount < props.freeDeliveryLimit) || (amount === 0 || amount === 500)) {
            return (
                <>
                    <span className={Styles.leftingShipmentPrice}>{`${amount.toFixed(2)} TL`}</span>
                    <span className={Styles.leftingShipmentText}>{Localization.localize('basketPromotionMessage')}</span>
                </>
            );
        }
        else if (Number(props.basketPrice) > props.freeDeliveryLimit) {
            return <span className={Styles.leftingShipmentText}>{Localization.localize('basketPromotionCompleteMessage')}</span>
        }
    }


    const barPercentage = useMemo(() => {
        const amount = props.freeDeliveryLimit - Number(props.basketPrice);
        if (amount > 0) {
            return (100 - ((amount / props.freeDeliveryLimit) * 100)).toFixed(0);
        }
        return 100;
    }, [props.freeDeliveryLimit, props.basketPrice]);

    const PopoverContent = () => {
        return (
            <div className={Styles.shipmentContainer}>
                <div className={Styles.shipmentHeaderStyles}>
                    <Icon iconName='lightning' />
                    {getLeftingPriceText()}
                </div>
                <div className={Styles.loadBarContainer}>
                    <div className={Styles.loadBar}>
                        <div className={Styles.loadBarFullfilled} style={{ width: `${barPercentage}%` }}></div>
                    </div>
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
