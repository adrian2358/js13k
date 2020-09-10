const level0: LevelConfig = {
  providers: [[1, 3]],
  painters: [[14, 3]],
  servers: [],
};

const level1: LevelConfig = {
  providers: [
    [3, 5],
    [3, 7],
    [3, 9],
  ],
  painters: [
    [12, 5],
    [12, 7],
    [12, 9],
  ],
  servers: [
    [6, 13],
    [9, 13],
  ],
};

const level2: LevelConfig = {
  providers: [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
  ],
  painters: [
    [14, 1],
    [14, 3],
    [14, 5],
    [14, 7],
  ],
  servers: [
    [5, 13],
    [7.5, 13],
    [10, 13],
  ],
};

export default [level0, level1, level2];
