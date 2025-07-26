export class ProductModel {
    _id: string;
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    credit: number;
    calculatedRating: number;
    description: string;
    advantages: string;
    disAdvantages: string;
    categories: [];
    tags: string;
    characteristics: {
        [key: string]: string;
    };
}
