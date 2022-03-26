import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core.module';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule],
    exports: [CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
