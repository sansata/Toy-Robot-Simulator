import {  createReducer, on } from '@ngrx/store';
import { Direction, IAppState } from '../models';
import {  leftRotation, movePosition, placement, report, rightRotation } from './robot.actions';


const initialState: IAppState = {
    robotPosition: {
      x: 0,
      y: 0,
      direction: Direction.NONE
    },
    log: []
  };

const _robotReducer = createReducer(
	initialState,
    on(leftRotation, (state, {robotPosition}) => {
        return {
			robotPosition: robotPosition,
            log: [...state.log,'LEFT']
		};
    }),
    on(rightRotation, (state, {robotPosition}) => {
         return {
             robotPosition: robotPosition,
            log: [...state.log,'RIGHT']

         };
     }
    ),
    on(movePosition, (state, {robotPosition}) => {
         return {
             robotPosition: robotPosition,
            log: [...state.log,'MOVE']

         };
     }
     ),
     on(placement, (state, {robotPosition}) => {
        const { x, y, direction } = robotPosition;
        return {
            robotPosition: robotPosition,
           log: [...state.log,`PLACE ${x}, ${y}${direction ? ', ' + direction : ''}`]

        };
    }),
    on(report, (state) => {
      const { x, y, direction } = state.robotPosition;
      return {
         ...state,
         log: [...state.log,'Report',`Output: ${x}, ${y}, ${direction}`]

      };
  })
);


export function robotReducer(state, action) {
    return _robotReducer(state, action);
  }


