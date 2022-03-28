import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { environment } from '../environments/environment';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AngularFireModule.initializeApp({ ...environment.firebase }),
        CoreModule,
        PagesModule,
        BrowserModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
