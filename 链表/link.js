//单链表
function LinkList() {
    this.head = null
    this.length = 0
    function Node(data) {
        this.data = data
        this.next = null
    }
    //链表尾部添加节点
    LinkList.prototype.append = function (data) {
        let node = new Node(data)
        if (this.length === 0) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
    //打印链表
    LinkList.prototype.toString = function () {
        let str = ''
        let current = this.head
        while (current) {
            str += " " + current.data
            current = current.next
        }
        console.log(str);
    }
    //插入元素
    LinkList.prototype.insert = function (data, position) {
        //越界判断
        if (position < 0 || position > this.length) return
        let node = new Node(data)
        //插入第一个位置
        if (position === 0) {
            let temp = this.head
            this.head = node
            node.next = temp
        } else {
            let index = 0
            let current = this.head
            let previous = null
            while (index < position) {
                previous = current
                current = current.next
                index++
            }
            previous.next = node
            node.next = current
        }
    }
    //根据位置删除节点
    LinkList.prototype.delete = function (position) {
        //越界判断
        if (position < 0 || position > this.length) return
        //position为0
        if (position === 0) {
            this.head = this.head.next
        }else {
            
        }
    }

}

let link = new LinkList()

link.append('bb')
link.append('cc')
link.append('aa')
// link.insert('dd', 2)
link.delete(0)

link.toString()


