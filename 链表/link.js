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
        if (position < 0 || position >= this.length) {
            console.log('object');
            return  null
        }
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
    //根据位置获取节点
    LinkList.prototype.getElementByPosition = function (position) {
        //越界判断
        if (position < 0 || position >= this.length) {
            return  null
        }
        let current = this.head
        let index = 0
        while (index < position) {
            current = current.next
            index++
        }
        return current.data
    }
    //根据位置删除节点
    LinkList.prototype.delete = function (position) {
        //越界判断
        if (position < 0 || position >= this.length) {
            return  null
        }
        //position为0
        if (position === 0) {
            this.head = this.head.next
        } else {
            let current = this.head
            let previous = null
            let index = 0
            while (index < position) {
                previous = current
                current = current.next
                index++
            }
            previous.next = current.next
        }
        this.length--
    }
    //更新节点
    LinkList.prototype.update = function (upData, position) {
        //越界判断
        if (position < 0 || position >= this.length) {
            return  null
        }
        let current = this.head
        let index = 0
        while (index < position) {
            current = current.next
            index++
        }
        current.data = upData
    }
    //根据元素获取链表位置
    LinkList.prototype.getPosition = function (data) {
        if (this.length === 0) return -1
        let current = this.head
        let index = 0
        while (current) {
            if (current.data == data) {
                return index
            } else {
                current = current.next
                index++
            }
        }
        //没有找到匹配元素
        return -1
    }
    //根据元素删除节点
    LinkList.prototype.byElementDelete = function (data) {
        let index = this.getPosition(data)
        this.delete(index)
    }
    //获取链表长度
    LinkList.prototype.getLength = function () {
        return this.length
    }
    //判断链表是否为空
    LinkList.prototype.isEmpty = function () {
        return this.length === 0
    }

}

let link = new LinkList()

link.append('bb')
link.append('cc')
link.append('aa')
// link.insert('dd', 2)
// link.toString()
// link.delete(2)
// link.update('pp', 2)
// link.byElementDelete('bb')
// link.toString()
// console.log(link.getLength());
// console.log(link.getPosition('cc'));
// console.log(link.isEmpty());
// console.log(link.getElementByPosition(1));


