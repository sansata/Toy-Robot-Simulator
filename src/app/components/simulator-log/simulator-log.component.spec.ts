import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { robotReducer } from 'src/app/store/robot/robot.reducer';

import { SimulatorLogComponent } from './simulator-log.component';

describe('SimulatorLogComponent', () => {
  let component: SimulatorLogComponent;
  let fixture: ComponentFixture<SimulatorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorLogComponent ],
      imports: [
        StoreModule.forRoot({appState: robotReducer})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
