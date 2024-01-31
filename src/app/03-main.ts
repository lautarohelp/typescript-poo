import { ProductHttpService } from "./services/product-http.service";


(async ()=> {
  try {
    const productService = new ProductHttpService();

    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    console.log('--'.repeat(10));
    console.log('update');
    const productId = products[0].id;
    await productService.update(productId, {
      price: 100000,
      title: 'new title'
    });

    console.log('--'.repeat(10));
    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (err) {
    console.error(err);

  }


})()




