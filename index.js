/**
 * @Author zlx
 * @Date 2018/1/15 上午9:57
 */
var ComputedArray = function (params) {
    var args = Array.prototype.slice.call(arguments);
    var len = args.length;

    this.args = args,
    this.len = len;
    // 错误处理
    if (!this.error(args)) {
        return
    }
    // 求和
    this.sum = function () {
        var args = this.getArgs(arguments);
        var len = args.length;
        if (len === 1) {
            // 一个数组
            return '一个数组的和';
        } else if (len > 1) {
            // 多个数组
            return '多个数组的和';
        }
    };
    // 求差
    this.diff = function () {
        var args = this.getArgs(arguments);
        var len = args.length;
        if (len === 1) {
            // 一个数组
            return '一个数组的差';
        } else if (len > 1) {
            // 多个数组
            return '多个数组的差';
        }
    };

    // 查找元素并返回下标
    this.find = function (arg) {
        // 合并数组
        var arr = this.combine(this.args);
        // 返回下标
        return arr.indexOf(arg);
    };
    // 合并数组
    this.concat = function (repeat, sort) {
        var arr = this.combine(this.args); // 合并数组
        var repeatFlag = repeat || false; // 是否去重, 默认否
        var sortFlag = sort || false; // 是否排序, 默认否
        // 去重
        if (repeatFlag && !sortFlag) {
            arr = this.removeRepeat(arr);
        }
        // 排序
        if (sortFlag && !repeatFlag) {
            arr = this.makeSort(arr);
        }
        // 去重+排序
        if (repeatFlag && sortFlag) {
            arr = this.removeRepeat(arr);
            arr = this.makeSort(arr);
        }
        return arr;
    };
    // 去重
    this.removeRepeatElement = function () {
        var args = this.getArgs(arguments);
        var arr = this.combine(args); // 合并数组
        arr = this.removeRepeat(arr);
        return arr;
    }
    // 排序
    this.sort = function (order) {
        var arr = this.combine(this.args); // 合并
        return this.makeSort(arr, order);
    }
    // 求最大值
    this.max = function () {
        var args = this.getArgs(arguments);
        var arr = this.combine(args); // 合并
        var sortArr = this.makeSort(arr);
        return sortArr[sortArr.length -1];
    }
    // 求最小值
    this.min = function () {
        var args = this.getArgs(arguments);
        var arr = this.combine(args); // 合并
        var sortArr = this.makeSort(arr);
        return sortArr[0];
    }
    // 查看是否是子集数组
    this.isContained = function (a, b) {
        if(!(a instanceof Array) || !(b instanceof Array)) {
            return false;
        }
        if(a.length < b.length) {
            return false;
        }
        for(var i = 0, len = b.length; i < len; i++){
            if(a.indexOf(b[i]) == -1) {
                return false;
            }
        }
        return true;
    }
    // 查找偶数
    this.getEvenNumbers = function () {
        var args = this.getArgs(arguments);
        var arr = this.combine(args); // 合并
        return arr.filter(i => i % 2 === 0);
    }

    // 查找奇数
    this.getOddNumbers = function () {
        var args = this.getArgs(arguments);
        var arr = this.combine(args); // 合并
        return arr.filter(i => i % 2 === 1);
    }
    return this;
};
// 获取参数原型方法
ComputedArray.prototype.getArgs = function() {
    return Array.prototype.slice.call(...arguments);
}
// 合并数组原型方法
ComputedArray.prototype.combine = function (args) {
    var arr = [];
    args.forEach(i => {
        arr = arr.concat(i);
    });
    return arr;
};
// 去重原型方法
ComputedArray.prototype.removeRepeat = function (arr) {
    return Array.from(new Set(arr));
};
// 排序原型方法
ComputedArray.prototype.makeSort = function (arr, order) {
    var order = order ? order : 1; // 默认顺序排序
    if (order >= 1) {
        return arr.sort((a,b) => a-b);
    } else if (order === -1) {
        return arr.sort((a,b) => b-a);
    }
};
// 错误处理
ComputedArray.prototype.error = function (args) {
    var flag = true;
    args.forEach(arr => {
        arr.forEach((i, index) => {
            if (typeof i === 'string') {
                if (isNaN(Number(i))) {
                    console.error(`数据类型错误!: 计算数组必须由纯数字组成！数组[${arr}]中${i}为字符串`);
                    flag = false;
                }
                console.warn(`数据类型提示: 计算数组必须由纯数字组成！数组[${arr}]中${i}为字符串`);
                // 转成数字
                arr[index] = Number(i);
            }
        });
    });
    this.args = args;
    return flag;
};
ComputedArray.prototype.slice = function () {
    return Array.prototype.slice.apply(this.args[0], arguments)
}
ComputedArray.prototype.push = function () {
    Array.prototype.push.apply(this.args[0], arguments)
    return this.args[0]
}
ComputedArray.prototype.splice = function () {
    Array.prototype.splice.apply(this.args[0], arguments)
    return this.args[0]
}