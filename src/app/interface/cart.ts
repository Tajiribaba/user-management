export interface Cart {
    id: number,
    userId: string | number, 
    date: Date,
    products: { productId: number, quantity: number }
} 
