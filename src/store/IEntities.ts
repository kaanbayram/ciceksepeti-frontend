import { IBasketItem } from "./states/Basket/entities";
import { IFilters } from "./states/Filters/entities";
import { IGeneral } from "./states/General/entities";
import { IProduct } from "./states/Products/entities"

interface IAction {
  payload: any
  type: string
}


interface IState {
  products: IProduct[];
  filters: IFilters;
  general: IGeneral;
  basket: IBasketItem[]
}

export type { IAction, IState }
