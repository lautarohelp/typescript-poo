import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 200,
  description: 'xdcfvgbhnjkmlñ',
  categoryId: 13,
  images: []
});


const products = productService.getAll();
const productId = products[0].id;


productService.update(productId, {
  title: 'cambio hecho'
});
const rta = productService.findOne(productId);
console.log(rta);

