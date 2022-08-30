import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {AddressListComponent} from "./address-list/address-list.component";
import {AddressListElementComponent} from "./address-list/address-list-element/address-list-element.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {AddressViewComponent} from "./address-list/address-view/address-view.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {PasswordForgotComponent} from "./password-forgot/password-forgot.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressListComponent,
    AddressListElementComponent,
    AddressViewComponent,
    SignInComponent,
    SignUpComponent,
    PasswordForgotComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
