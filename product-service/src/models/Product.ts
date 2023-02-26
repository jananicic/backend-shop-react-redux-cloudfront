export interface IProduct {
    id: string,
    title: string,
    price: number,
    description: string,
    image_url: string,
}

export type ProductsList = IProduct[];