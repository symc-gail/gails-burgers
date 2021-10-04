import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TabPageComponent } from './tab-page/tab-page.component';
import { SplashTabComponent } from './splash-tab/splash-tab.component';
import { OrderTabComponent } from './order-tab/order-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BurgerTypeComponent } from './order-tab/burger-type/burger-type.component';
import { MatCardModule } from '@angular/material/card';
import { FeaturedBurgerComponent } from './splash-tab/featured-burger/featured-burger.component';
import { BurgerState } from './_store/burger.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    TabPageComponent,
    SplashTabComponent,
    OrderTabComponent,
    BurgerTypeComponent,
    FeaturedBurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    NgxsModule.forRoot([BurgerState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
