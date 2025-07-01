import { API_URL_GETPRODUCT } from "../../config/config";

export interface Product{
    id: string;
    name: string;
    price: number;
}

const API_URL = API_URL_GETPRODUCT

export async function fetchProducts(): Promise<Product[]>{
    const res = await fetch(API_URL)
    
    if(!res.ok) throw new Error(`Failed to fetch product (${res.status}): ${res.statusText}`);

    const data = (await res.json() as Product[])

    return data
}