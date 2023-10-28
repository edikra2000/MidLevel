/**
 * Function countValidPaths(X, Y):
 * This function calculates the number of valid paths to reach a specific point (X, Y) while following given constraints.
 */
function countValidPaths(X, Y) {
  const dp = new Array(X + 1).fill(null).map(() => new Array(Y + 1).fill(0));
  dp[0][0] = 1;
  for (let x = 0; x <= X; x++) {
    for (let y = 0; y <= Y; y++) {
      if (x > 0 && (x < 3 || dp[x - 1][y] !== 3)) {
        dp[x][y] += dp[x - 1][y];
      }
      if (y > 0 && (y < 3 || dp[x][y - 1] !== 3)) {
        dp[x][y] += dp[x][y - 1];
      }
    }
  }

  const numPaths = dp[X][Y];

  return numPaths;
}

/**
 * Function findRoutes(X, Y):
 * This function is used to find and store the different valid routes to reach a specific point (X, Y) while satisfying the given constraints.
 */
function findRoutes(X, Y) {
  const routes = [];

  // Helper function to generate routes using backtracking.
  function backtrack(x, y, path) {
    if (x === 0 && y === 0) {
      routes.push(path);
      return;
    }

    if (x > 0 && (path.length < 2 || path.slice(-2) !== "EE")) {
      backtrack(x - 1, y, path + "E");
    }
    if (y > 0 && (path.length < 2 || path.slice(-2) !== "NN")) {
      backtrack(x, y - 1, path + "N");
    }
  }

  // Start the backtracking from the goal (X, Y).
  backtrack(X, Y, "");

  return routes;
}

//Below you can find Example 3 as mentioned in task

// Example 3
const X3 = 0;
const Y3 = 0;
const numValidPaths3 = countValidPaths(X3, Y3);
console.log("Example 3:");
console.log("Number of valid paths:", numValidPaths3);