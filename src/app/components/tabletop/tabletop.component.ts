import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tableHeight, tableWidth } from 'src/app/store/constants';
import { Direction, IAppState, IRobotPosition } from 'src/app/store/models';
import { selectInitialState } from 'src/app/store/robot/robot.selector';

const MARKER = {
  [Direction.NORTH]: '▲',
  [Direction.EAST]: '►',
  [Direction.SOUTH]: '▼',
  [Direction.WEST]: '◄'
};

@Component({
  selector: 'app-tabletop',
  templateUrl: './tabletop.component.html',
  styleUrls: ['./tabletop.component.scss']
})
export class TabletopComponent implements OnInit {
  tableData: any;
  placement: IRobotPosition;

  constructor(private store: Store<IAppState>) {
   }

  ngOnInit(): void {
    this.store
			.pipe(
				select(selectInitialState)
			)
			.subscribe((initialState) => {
        this.placement = initialState.appState.robotPosition;
        this.tableData = this.boardGameDrive();
			});
  }

  boardGameDrive(){
    
    let rows = [];
   
    for (let r = 0; r <= tableWidth; r++) {
        let cols = [];
        for (let c = 0; c <= tableHeight; c++) {
            let marker = '';
              if (this.placement.direction  &&
              (c === this.placement.x) && (r === ( tableWidth - this.placement.y))) {
                    marker = MARKER[this.placement.direction]
                 }
            cols.push(marker);
        }
        rows.push(cols);
    }
    return rows;
  }
 
}
