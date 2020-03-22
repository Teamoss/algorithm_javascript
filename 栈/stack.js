
// function Stack() {
//     this.val = []
//     Stack.prototype.push = function(element){
//         this.val.push(element)
//     }  
// }

//栈特点 先进后出
class Stack {
    constructor() {
        this.arr = []
        // 压栈操作
        Stack.prototype.push = function (element) {
            this.arr.push(element)
        }
        // 出栈操作
        Stack.prototype.pop = function () {
            return this.arr.pop()
        }
        // 查看栈顶元素
        Stack.prototype.pep = function () {
            return this.arr[this.arr.length - 1]
        }
        // 判断栈中的元素是否为空
        Stack.prototype.isEmpty = function () {
            return this.arr.length === 0
        }
        // 获取栈中元素的个数
        Stack.prototype.size = function () {
            return this.arr.length
        }
    }
}


let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
stack.pop()
stack.isEmpty()
console.log(stack.isEmpty());
console.log(stack.arr);


//十进制转为二进制
function tenToTwo(num) {
    let arr = []
    let str = ''
    while (num > 0) {
        arr.push(num % 2)
        num = Math.floor(num / 2)
    }
    while (arr.length > 0) {
        str += arr.pop()
    }
    return str
}

console.log(tenToTwo(1000));