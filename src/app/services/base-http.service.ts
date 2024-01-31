import axios from "axios";

import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class BaseHttpService<TypeClass> {
// private data: TypeClass[] = [];

  constructor(
    private url: string
  ) {}

async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data
}
}


// const service = new BaseHttpService<string>();
// service.getAll();

// const service2 = new BaseHttpService<Category>();
// service2.getAll();


(async ()=>{
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll()
  console.log('product', rta.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories';

  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll()
  console.log('category', rta1.length);



})()



