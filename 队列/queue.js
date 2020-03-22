//队列 特点 先进先出
function Queue() {
    this.arr = []
}

//进队
Queue.prototype.enterQueue = function (e) {
    this.arr.push(e)
}
//出队
Queue.prototype.deleteQueue = function () {
    return this.arr.shift()
}
//查看队列第一个元素
Queue.prototype.firstQueue = function () {
    return this.arr[0]
}
//判断队列为空
Queue.prototype.isEmpty = function () {
    return this.arr.length === 0
}
//查看队列元素个数
Queue.prototype.size = function () {
    return this.arr.length
}

let queue = new Queue()
// queue.enterQueue('aa')
// queue.enterQueue('bb')
// console.log(queue.isEmpty()); 
// console.log(queue.firstQueue());

//击鼓传花
function game(list, num) {
    if (list.length <= 0) return
    for (let i = 0; i < list.length; i++) {
        queue.enterQueue(list[i])
    }
    while (queue.size() > 1) {
        for (let j = 1; j < num; j++) {
            queue.enterQueue(queue.deleteQueue())
        }
        queue.deleteQueue()
    }
    return queue.deleteQueue()
}

let arr =  ['a', 'b', 'c']
// c a 
// game(arr,2)
console.log(game(arr,3));

