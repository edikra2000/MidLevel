/**Function countValidPaths(X, Y):
This function calculates the number of valid paths to reach a specific point (X, Y) while following given constraints. To do this, it uses a two-dimensional array to store the number of valid paths from (0, 0) to each point. Initially, all values in this matrix are set to zero, except for the value (0,0), which is set to one. Then, it uses a nested loop to fill in this matrix by applying the specified rules for moving in the east and north directions. When the loop completes, the number of valid paths to reach the point (X, Y) is stored in the dp[X][Y] position. */
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

/**Function findRoutes(X, Y):
This function is used to find and store the different valid routes to reach a specific point (X, Y) while satisfying the given constraints. It uses a helper function to generate routes using a recursive loop. It starts from the specified point (X, Y) and uses different routes to move either east or north. The generated routes are stored in an array called routes. When the function completes, it returns this array of valid routes. */
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

/**These two functions are used to calculate the number of valid paths and to find the specific routes that follow these paths to reach the designated destination (X, Y), while adhering to the given constraints in the original question. */
//Below you can find Example 2 as mentioned in task


// Example 2
const X2 = 0;
const Y2 = 7;
const numValidPaths2 = countValidPaths(X2, Y2);
const routes2 = findRoutes(X2, Y2);
console.log(`Example 2:
● Number of valid paths: ${numValidPaths2}
● Routes for each valid path (Optional): ${routes2.join(", ")}`);