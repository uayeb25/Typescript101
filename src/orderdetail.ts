import {Product} from "./product";

class OrderDetail{
    
    product: Product;
    quantity: number;

    constructor(p: Product, q: number){
        this.product = p;
        this.quantity=q;
    }

    getTotal(discount: number): number{
        const pricewithoutDiscount = this.product.unitPrice * this.quantity;
        return pricewithoutDiscount * (1-discount);
    }

}

export { OrderDetail }