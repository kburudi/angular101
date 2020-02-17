import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BasicAppHighlightDirective} from './basic-app-highlight-directive';
import { ProperHighlightDirectiveDirective } from './directives/proper-highlight-directive.directive';
import { StructuralDirective } from './directives/stractural.directive';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicAppHighlightDirective,
    ProperHighlightDirectiveDirective,
    StructuralDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
