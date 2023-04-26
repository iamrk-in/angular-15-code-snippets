import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, 
  { path: "home", component: HomeComponent }, 
  { path: "about-us", component: AboutUsComponent }, 
  { path: "products", component: ProductsComponent }, 
  { path: "product-detail/:id", component: ProductDetailComponent }, 
  { path: "event-binding", component: EventBindingComponent }, 
  { path: "contact-us", component: ContactUsComponent }, 
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
