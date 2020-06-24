import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
