import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';

import { Product } from '../shared/product';
import { retrievedProductList } from './product.actions';

export const initialState: ReadonlyArray<Product> = []

export const productReducer = createReducer(
initialState,
on(retrievedProductList, (state, { products}) => products)
);
