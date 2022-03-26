import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [BrowserModule, PagesModule, NgbModule],
    exports: [BrowserModule, PagesModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class CoreModule {}
