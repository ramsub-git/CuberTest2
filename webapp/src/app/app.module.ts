import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';
import { AppComponent } from './app.component';
import { OfficeComponent } from './office.component';
import { HumanInteractionComponent } from './humanInteraction.component';
import { AIInteractionComponent } from './AIInteraction.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeComponent,
    HumanInteractionComponent,
    AIInteractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
