import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Product } from '../shared/product';

export interface ProductState {
 product: Product[]
}

export const reducers: ActionReducerMap<ProductState> = {

};


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
