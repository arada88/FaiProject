import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { BackendService } from './backend.service' ;

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styles: []
})
export class AppComponent implements OnInit {
@ViewChild('productList',{static:true})
productList: ProductListComponent;
  
 constructor(private backendService: BackendService) {} 
ngOnInit(): void {
this.productList.products = this.backendService.getProducts();

}
