//斐波那契数列
let arr = [1, 1]
function fb(n){
    for(let i = 2;i<n;i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr
}

console.log(fb(5));

