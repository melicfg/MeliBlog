import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './shared/layout/layout.module';
import { BlogModule } from './blog/blog.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './users/services/auth.service';
import { ChargingModule } from './charging/charging.module';
import { ChargingComponent } from './charging/charging.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChargingComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    LayoutModule,
    UsersModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent, ChargingComponent]
})
export class AppModule { 
  
  // constructor(private injector: Injector){
  //   const chargingElement = createCustomElement(
  //     ChargingComponent, {
  //       injector: this.injector
  //     }
  //   )
  //     customElements.define('charging-element', chargingElement)
  // }
  // ngDoBootstrap(): void{}
}
