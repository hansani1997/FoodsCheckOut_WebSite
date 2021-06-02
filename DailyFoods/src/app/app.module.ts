import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule ,routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DataService } from './data.service';
import { FooterComponent } from './footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    SidenavComponent,
    FooterComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTabsModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
