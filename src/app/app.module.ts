import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { JokeListComponent, JokeDetailComponent } from './pages';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeDetailComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
