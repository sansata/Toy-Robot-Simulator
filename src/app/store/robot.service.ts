import { Injectable } from "@angular/core";
import { DIRECTIONS, tableHeight, tableWidth } from "./constants";
import { Direction, IRobotPosition } from "./models";
import { avoid } from "./robot/robot.actions";

@Injectable({
	providedIn: 'root'
})
export class RobotService {

    public place (robotPosition: IRobotPosition, avoidPosition: IRobotPosition): IRobotPosition {
        if (this.validatePosition(robotPosition, avoidPosition)) {
            return  robotPosition;
        }
    }

    public leftRotation(robotPosition: IRobotPosition, avoidPosition: IRobotPosition): IRobotPosition  {
		  if(this.validatePosition(robotPosition, avoidPosition)){
            let newPos: IRobotPosition = { x: robotPosition.x, y: robotPosition.y };
            let index = DIRECTIONS.findIndex((direction: Direction) => direction === robotPosition.direction);
            index--;
            if (index < 0) index = DIRECTIONS.length - 1;
            newPos.direction = DIRECTIONS[index];
            return newPos;
        }
       
  	}

    public rightRotation(robotPosition: IRobotPosition, avoidPosition: IRobotPosition): IRobotPosition  {
		  if(this.validatePosition(robotPosition, avoidPosition)){
            let newPos: IRobotPosition = { x: robotPosition.x, y: robotPosition.y };
            let index = DIRECTIONS.findIndex((direction: Direction) => direction === robotPosition.direction);
            index++;
            if (index  >= DIRECTIONS.length) index = 0;
            newPos.direction = DIRECTIONS[index];
            return newPos;
        }
	  }

    public movePosition (robotPosition: IRobotPosition, avoidPosition: IRobotPosition): IRobotPosition {
        let newPos: IRobotPosition = { x: robotPosition.x, y: robotPosition.y };
        
        switch (robotPosition.direction) {
          case Direction.EAST: newPos.x += 1; break;
          case Direction.WEST: newPos.x -= 1; break;
          case Direction.NORTH: newPos.y += 1; break;
          case Direction.SOUTH: newPos.y -= 1; break;
        }
        
        const newPlacement = { ...newPos, direction: robotPosition.direction };
  
        if (this.validatePosition(newPlacement, avoidPosition)) {
            return  newPlacement;
        }
    }

    private validatePosition(robotPosition: IRobotPosition, avoidPosition: IRobotPosition): boolean{
        debugger;
        const { x, y, direction } = robotPosition;
        const isDirectionValid = ((direction && (direction !== Direction.NONE)));
        const isValidPosition = !(avoidPosition.x == x && avoidPosition.y == y && avoidPosition.direction == direction);

        return isDirectionValid && isValidPosition &&
          (x >= 0) && (x <= tableWidth) && 
          (y >= 0) && (y <= tableHeight);
       
    }

}