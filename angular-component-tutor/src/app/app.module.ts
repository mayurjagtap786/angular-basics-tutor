import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [

  
    UserComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
