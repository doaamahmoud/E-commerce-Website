import { DecimalPipe } from "@angular/common";
import { IProduct } from "./iproduct";

export interface OrderServer {
total:number;
data:[{
    product:IProduct;
    numincart:number;
}];
}
export interface OrderPublic {
    total:number;
    Prodata:[{
        id:number;
        incart:number;
    }];
}
