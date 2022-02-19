import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Direction, IAppState, IRobotPosition } from 'src/app/store/models';
import { RobotService } from 'src/app/store/robot.service';
import { leftRotation, movePosition } from 'src/app/store/robot/robot.actions';
import { robotReducer } from 'src/app/store/robot/robot.reducer';

import { SimulatorComponent } from './simulator.component';

describe('SimulatorComponent', () => {
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorComponent ],
      providers: [RobotService],
      imports: [
        StoreModule.forRoot({appState: robotReducer}),
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('on Placement', () => {
    const direction = Direction.WEST;
    const placementValue : IRobotPosition =  {
      x: 1,
      y: 1,
      direction: direction
    };
    component.x = placementValue.x;
    component.y = placementValue.y;
    component.direction = placementValue.direction;
    component.onPlacement();    
    expect( component.newPlacement).toEqual(placementValue);
  });
});


describe('should check robot initial state', () => {
  const x = 0;
  const y = 0;
  const initialState: IAppState = {
    robotPosition: {
      x,
      y,
      direction: Direction.NONE
    },
    log: []
  };
  it('should handle initial state', () => {
    expect(robotReducer(undefined, { type: 'unknown' })).toEqual({
      robotPosition: {
        x: 0,
        y: 0,
        direction: Direction.NONE
      },
      log: []
    });
  });
});


describe('should MOVE the robot to one unit in the current direction', () => {
  const postion: IRobotPosition = { x: 2, y: 2, direction:Direction.NONE};
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorComponent ],
      providers: [RobotService],
      imports: [
        StoreModule.forRoot({appState: robotReducer}),
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('towards EAST', () => {
    const direction = Direction.EAST;
    const placementValue : IRobotPosition =  {
      ...postion,
      direction: direction
    };
    component.x = placementValue.x;
    component.y = placementValue.y;
    component.direction = placementValue.direction;

    component.onPlacement();  
    component.movePosition();    

    const expected = { ...placementValue, x: placementValue.x + 1 };
    expect(component.newPlacement).toEqual(expected);
  });

  it('towards WEST', () => {
    const direction = Direction.WEST;
    const placementValue : IRobotPosition =  {
      ...postion,
      direction: direction
    };
    component.x = placementValue.x;
    component.y = placementValue.y;
    component.direction = placementValue.direction;

    component.onPlacement(); 
    component.movePosition();   
    
    const expected = { ...placementValue, x:placementValue.x - 1 };
    expect(component.newPlacement).toEqual(expected);
  });

  it('towards NORTH', () => {
    const direction = Direction.NORTH;
    const placementValue : IRobotPosition =  {
      ...postion,
      direction: direction
    };
    component.x = placementValue.x;
    component.y = placementValue.y;
    component.direction = placementValue.direction;

    component.onPlacement();  
    component.movePosition();   

    const expected = { ...placementValue, y: placementValue.y + 1 };
    expect(component.newPlacement).toEqual(expected);
  });

  it('towards SOUTH', () => {
    const direction = Direction.SOUTH;
    const placementValue : IRobotPosition =  {
      ...postion,
      direction: direction
    };
    component.x = placementValue.x;
    component.y = placementValue.y;
    component.direction = placementValue.direction;
    
    component.onPlacement(); 
    component.movePosition();   
    
    const expected = { ...placementValue, y: placementValue.y - 1 };
    expect(component.newPlacement).toEqual(expected);
  });
});


