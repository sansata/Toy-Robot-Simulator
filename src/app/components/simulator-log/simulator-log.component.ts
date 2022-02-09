import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/models';
import { selectInitialState } from 'src/app/store/robot/robot.selector';

@Component({
  selector: 'app-simulator-log',
  templateUrl: './simulator-log.component.html',
  styleUrls: ['./simulator-log.component.scss']
})
export class SimulatorLogComponent implements OnInit {
  log: any;
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store
			.pipe(
				select(selectInitialState)
			)
			.subscribe((initialState) => {
        this.log = initialState.appState.log;
			});
  }

}
