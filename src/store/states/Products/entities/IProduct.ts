export interface IProduct {
    _id: string;
    tags: Array<string>;
    price: number;
    name: string;
    description: string;
    slug: string;
    added: number;
    manufacturer: string;
    itemType: string;
    category: string;
}