import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieLawModule } from 'angular2-cookie-law';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ArticleComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CookieLawModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
