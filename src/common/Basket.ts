import { IBasketItem } from "@store";

/**
 * Inside the Basket Class 
 * Created static methods purpose of 
 * reach without create object and 
 * manage easily localStorage
 */
export class Basket {

    static addToBasket(basketItem: IBasketItem) {
        let basket = [];
        if (localStorage.getItem('basket') as string) {
            basket = JSON.parse(localStorage.getItem('basket') as string)
        }
        const item = basket.find((_item: any) => _item._id === basketItem._id);
        if (item) {
            item.count++;
        }
        else {
            basket.push({
                _id: basketItem._id,
                price: basketItem.price,
                name: basketItem.name,
                count: 1
            });
        }

        localStorage.setItem('basket', JSON.stringify(basket));

        // return JSON.stringify(basket);
        return basket;
    }

    static deleteFromBasket(_id: string) {
        let basket = JSON.parse(localStorage.getItem('basket') as string) || [];
        const item = basket.find((basketItem: any) => basketItem._id === _id);
        if (item) {
            item.count--;
        }

        if (!item.count) {
            basket = basket.filter((basketItem: any) => basketItem._id !== _id);
        }

        if (!basket.length) {
            localStorage.setItem('basket', "");

            return "";
        }
        else {
            localStorage.setItem('basket', JSON.stringify(basket));

            // return JSON.stringify(basket)
            return basket;
        }

    }
}


/**
 * Helping to return total basket prices
 * @param basket basket items
 * @returns returnin basket total prices
 */
export function getPrices(basket: IBasketItem[]) {
    if (basket?.length) {
        return basket
            .map((item: IBasketItem) => (item.count as number) * (item as any)?.price)
            ?.reduce((result: any, item: number) => result + item)
            ?.toFixed(2);
    }
    return 0;
}