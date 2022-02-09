import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { robotReducer } from './store/robot/robot.reducer';
import { TabletopComponent } from './components/tabletop/tabletop.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { SimulatorLogComponent } from './components/simulator-log/simulator-log.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabletopComponent,
    SimulatorComponent,
    SimulatorLogComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( {appState: robotReducer}),
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
