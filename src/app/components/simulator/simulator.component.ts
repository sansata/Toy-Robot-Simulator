import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DIRECTIONS } from 'src/app/store/constants';
import { Direction, IAppState, IRobotPosition } from 'src/app/store/models';
import { RobotService } from 'src/app/store/robot.service';
import { avoid, leftRotation, movePosition, placement, report, rightRotation } from 'src/app/store/robot/robot.actions';
import { selectInitialState } from 'src/app/store/robot/robot.selector';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  currentPlacement: IRobotPosition;
  newPlacement: IRobotPosition;
  placementValue: IRobotPosition;
  avoidPlacement: IRobotPosition;
  directions: any;
  direction =  Direction.NORTH;
  x = 0;
  y = 0;
  constructor(private store: Store<IAppState>, private robotService: RobotService) {
    this.store
			.pipe(
				select(selectInitialState)
			)
			.subscribe((initialState) => {
        this.currentPlacement = initialState.appState.robotPosition;
        this.avoidPlacement = initialState.appState.avoidPosition;
        
			});
      this.directions = Object.values(DIRECTIONS)
   }

  ngOnInit(): void {
  }

  avoid(){
    this.placementValue = {
      x: this.x,
      y: this.y,
      direction: this.direction
    };
    this.store.dispatch(avoid({robotPosition: this.placementValue }));
  }

  onPlacement(){
    this.placementValue = {
      x: this.x,
      y: this.y,
      direction: this.direction
    };
    this.newPlacement =  this.robotService.place(this.placementValue, this.avoidPlacement);
    if( this.newPlacement ) this.store.dispatch(placement({robotPosition:   this.newPlacement }));
  }

  leftRotation(){
    this.newPlacement  = this.robotService.leftRotation(this.currentPlacement, this.avoidPlacement);
    if( this.newPlacement ) this.store.dispatch(leftRotation({robotPosition:   this.newPlacement }));
  }

  rightRotation(){
    this.newPlacement  = this.robotService.rightRotation(this.currentPlacement, this.avoidPlacement);
    if( this.newPlacement ) this.store.dispatch(rightRotation({robotPosition:  this.newPlacement }));
  }

  movePosition(){
    this.newPlacement  =  this.robotService.movePosition(this.currentPlacement, this.avoidPlacement);
    if( this.newPlacement ) this.store.dispatch(movePosition({robotPosition:  this.newPlacement }));
  }

  report(){
    this.store.dispatch(report());
  }
}
