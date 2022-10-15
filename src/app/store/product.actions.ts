import { createAction, props } from '@ngrx/store';
import { Product } from '../shared/product';

export const addProduct = createAction(
  '[Product List] Add Product',
  props<{ productId: string}>()
);

export const removeProduct = createAction(
  '[Product Collection] Remove Product',
  props<{ productId: string }>()
);
 
export const retrievedProductList = createAction(
  '[Product List/API] Retrieve Products Success',
  props<{ products: ReadonlyArray<Product> }>()
);