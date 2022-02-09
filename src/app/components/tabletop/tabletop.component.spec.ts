import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { IAppState } from 'src/app/store/models';
import { robotReducer } from 'src/app/store/robot/robot.reducer';

import { TabletopComponent } from './tabletop.component';

describe('TabletopComponent', () => {
  let component: TabletopComponent;
  let fixture: ComponentFixture<TabletopComponent>;
  let store: Store<IAppState>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletopComponent ],
      imports: [
        StoreModule.forRoot({appState: robotReducer})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
