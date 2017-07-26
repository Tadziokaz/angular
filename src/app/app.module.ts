
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageModule } from 'app/landing-page/landing-page.module';
import { AppComponent } from 'app/app.component';

@NgModule({
    imports: [
        BrowserModule,
        LandingPageModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ])
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
