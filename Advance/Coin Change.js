// coins = [1,2,5]
// amount = 11

// Output = 3
// (5 + 5 + 1)



function coinChange(coins, amount) {

    let dp = new Array(amount + 1).fill(Infinity)

    dp[0] = 0

    for (let coin of coins) {

        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }

    }

    return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChange([1,2,5], 11))



//// O(amount * number_of_coins)



