import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from 'app/landing-page/lading-page-routing.module';

import { HomeComponent } from 'app/landing-page/home/home.component';

@NgModule({
    imports: [
        CommonModule,
        LandingPageRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class LandingPageModule { }
