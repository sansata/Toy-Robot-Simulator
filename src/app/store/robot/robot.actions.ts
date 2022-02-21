import { createAction, props } from "@ngrx/store";
import { IRobotPosition } from "../models";

export const leftRotation = createAction('[Robot Component] LeftRotation', props<{ robotPosition: IRobotPosition }>());
export const rightRotation = createAction('[Robot Component] RightRotation', props<{ robotPosition: IRobotPosition }>());
export const movePosition = createAction('[Robot Component] MovePosition', props<{ robotPosition: IRobotPosition }>());
export const placement = createAction('[Robot Component] Placement', props<{ robotPosition: IRobotPosition }>());
export const avoid = createAction('[Robot Component] Avoid', props<{ robotPosition: IRobotPosition }>());
export const report = createAction('[Robot Component] Report');
export const reset = createAction('[Robot Component] Reset');