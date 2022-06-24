/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function (board) {
    let m = board.length,
      n = board[0].length;
    // 方向数组 往八个方向扩散
    let directions = [
      // 左
      [1, 0],
      // 右
      [-1, 0],
      // 上
      [0, -1],
      // 下
      [0, 1],
      // 右下
      [1, 1],
      // 右上
      [-1, -1],
      // 左下
      [1, -1],
      // 左上
      [-1, 1],
    ];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 活细胞的数量
        let liveCount = 0;
        for (let dir of directions) {
          let newI = i + dir[0],
            newJ = j + dir[1];
          // 新的索引位置如果超出边界范围
          if (newI < 0 || newI >= m || newJ < 0 || newJ >= n) continue;
          // 1 表示原状态和新状态都是活细胞；2 表示原状态是活细胞，新状态是死细胞；
          if (board[newI][newJ] == 1 || board[newI][newJ] == 2) liveCount++;
        }
        // 按照规则更改细胞状态
        if (board[i][j] == 1) {
          // 原状态是活细胞，新状态是死细胞，所以置为2
          if (liveCount < 2 || liveCount > 3) board[i][j] = 2;
        } else {
          // 原状态是死细胞，新状态是活细胞，所在置为3
          if (liveCount == 3) board[i][j] = 3;
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 1 和 3 表示新状态是活细胞 而1和3都是奇数，&1为1
        board[i][j] &= 1;
      }
    }
  };

//   [[0,1,0],[0,0,1],[1,1,1],[0,0,0]] => [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
  