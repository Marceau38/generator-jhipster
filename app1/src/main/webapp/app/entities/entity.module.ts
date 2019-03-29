import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: './product/product.module#App1ProductModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#App1ProductModule'
      },
      {
        path: 'category',
        loadChildren: './category/category.module#App1CategoryModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#App1ProductModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#App1CustomerModule'
      },
      {
        path: 'address',
        loadChildren: './address/address.module#App1AddressModule'
      },
      {
        path: 'wish-list',
        loadChildren: './wish-list/wish-list.module#App1WishListModule'
      },
      {
        path: 'category',
        loadChildren: './category/category.module#App1CategoryModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#App1ProductModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#App1CustomerModule'
      },
      {
        path: 'address',
        loadChildren: './address/address.module#App1AddressModule'
      },
      {
        path: 'wish-list',
        loadChildren: './wish-list/wish-list.module#App1WishListModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App1EntityModule {}
