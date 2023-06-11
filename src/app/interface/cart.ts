export interface Cart {
    userId: string | number, 
    date: Date,
    products: { productId: number, quantity: number }
} 
