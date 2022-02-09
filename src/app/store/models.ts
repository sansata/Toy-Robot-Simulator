export enum Direction {
    NORTH = 'NORTH',
    EAST = 'EAST',
    WEST = 'WEST',
    SOUTH = 'SOUTH',
    NONE = 'NONE'
}

export enum Rotation {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

interface ICoordinate {
    x: number;
    y: number;
  }
  
  export interface IRobotPosition extends ICoordinate {
    direction?: Direction
  }
  
  export interface IAppState {
    robotPosition: IRobotPosition,
    log?: string[]
  }
