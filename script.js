/// Fibonacci

function fib(n){
    if(n <= 1) return n
    return fib(n-1) + fib(n-2)
}

console.log(fib(6))


// Dynamic Programming Approaches

// There are two main DP approaches

// Approach	Method
// Memoization	Top-Down (Recursion + Cache)
// Tabulation	Bottom-Up (Iterative Table)


/// /Memoization


function fib(n, memo = {}){
    if(n in memo) return memo[n]

    if(n <= 1) return n

    memo[n] = fib(n-1, memo) + fib(n-2, memo)

    return memo[n]
}

console.log(fib(6))


/// Time Complexity & space complexity 0(n)

//// tabulation

function fib(n){
    let dp = new Array(n+1).fill(0)

    dp[1] = 1

    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}

console.log(fib(6))

/// /// Time Complexity & space complexity 0(n)


////  space opitimized DP

function fib(n){
    let a = 0
    let b = 1

    for(let i = 2; i <= n; i++){
        let temp = a + b
        a = b
        b = temp
    }

    return n === 0 ? 0 : b
}

console.log(fib(6))

//// space complexity 0(n)

///// Climbing Stairs

function climbStairs(n){
    let dp = new Array(n+1)

    dp[1] = 1
    dp[2] = 2

    for(let i = 3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}

console.log(climbStairs(5))

/// output 8 ways














