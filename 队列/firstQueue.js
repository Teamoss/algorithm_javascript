//优先级队列
function Queue() {
    this.arr = []
    function Element(e, num) {
        this.e = e
        this.num = num
    }
    //进队
    this.enterQueue = function (e, num) {
        let element = new Element(e, num)
        if (this.isEmpty()) {
            this.arr.push(element)
        } else {
            let flag = true
            for (let i = 0; i < this.arr.length; i++) {
                if (num < this.arr[i].num) {
                    this.arr.splice(i, 0, element)
                    flag = false
                    break
                }
            }
            if(flag){
                this.arr.push(element)
            }
        }
        console.log('-------------------------------');
        console.log(this.arr);
    }
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
queue.enterQueue('aa', 1)
queue.enterQueue('bb', 4)
queue.enterQueue('cc', 5)
queue.enterQueue('dd', 6)
queue.enterQueue('ee', 4)
queue.enterQueue('ff', 4)
// console.log(queue);

