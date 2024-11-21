export interface ProductTypes {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }
  
export interface ProductResponse {
    products: ProductTypes[];
    total: number;
    skip: number;
    limit: number;
  }