class Event {
    constructor() {
        // 缓存列表，存放 event 及 fn
        this.map = {};
    }
    on(event, fn) {
        // 如果对象中没有对应的 event 值，也就是说明没有订阅过，就给 event 创建个缓存列表
        this.map[event] = this.map[event] || []
        // 把 fn 添加到对应 event 的缓存列表里
        this.map[event].push(fn)
    }
    emit(event, data) {
        const fnList = this.map[event] || []
        // 如果缓存列表里没有 fn 就return
        if (!fnList || fnList.length === 0) return;
        // 遍历 event 值对应的缓存列表，依次执行 fn
        fnList.forEach(fn => fn.call(undefined, data))
    }
    off(event, fn) {
        const fnList = this.map[event] || []
        const index = fnList.indexOf(fn)
        // 如果缓存列表里没有要找的fn 就return
        if (index < 0) return
        fnList.splice(index, 1)
    }
    //执行一次
    once(event, callback) {
        const f = (data) => {
            callback(data);
            this.off(event, f);
        }
        this.on(event, f);
    }
}


export default new Event();
