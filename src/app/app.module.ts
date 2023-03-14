import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './body/home/home.component';
import { AnalogueSynthsComponent } from './body/anlogue-synths/anlogue-synths.component';
import { DigitalSynthsComponent } from './body/digital-synths/digital-synths.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { ProductsComponent } from './body/products/products.component';
import { ProductItemComponent } from './body/products/product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
// import { MyFilterPipe } from './body/pipes/MyFilterPipe.pipe';


const appRoutes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'analogue-synths', component: AnalogueSynthsComponent },
{path: 'digital-synths', component: DigitalSynthsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    AnalogueSynthsComponent,
    DigitalSynthsComponent,
    ProductDetailComponent,
    ProductsComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
