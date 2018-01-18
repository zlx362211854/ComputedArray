 ### use

```
<script src="./index.js"></script>

<script>
    var CA = new ComputedArray();

    console.log(CA.sum([1, '2'], [2, 3, 5, 6])) // 加

    console.log(CA.diff([1, '2'], [2, 3, 5, 6])) // 减
    // 查找
    var find = new ComputedArray([1,2,3,4]).find(4)
    console.log(find)

    // 合并数组（支持去重和排序）concat(去重，排序)
     var concat = new ComputedArray([1,3,2], [2,3,4]).concat(true, true);
    console.log(concat)

    // 去重
    var repeat = new ComputedArray().removeRepeatElement([1,2,3,3], [3,4]);
    console.log(repeat, 're')

    // 排序 ( 1：顺序排序， -1：逆序排序 )
    var sort = new ComputedArray([3,2,1,4,5]).sort(-1);
    console.log(sort)

    //
    var limit = new ComputedArray();
    console.log(limit.max([1,2,3,9]))// 求最大值
    console.log(limit.min([1,2,3,9]))// 求最小值

    // 查询是否为子数组
    var contain = new ComputedArray().isContained([1,2,3], [1,2])
    console.log(contain)

    // 查找所有偶数
    var even = new ComputedArray().getEvenNumbers([1,2,3,4,6]);
    console.log(even)

    // 查找所有奇数
    var odd = new ComputedArray().getOddNumbers([1,2,3,4,6]);
    console.log(odd)

    // slice方法
    var a = new ComputedArray([1,2,3,4]);
    console.log(a.slice(0, 2))

    // push方法
    var a = new ComputedArray([1,2,3,4]);
    console.log(a.push(5))

    // splice方法
    var a = new ComputedArray([1,2,3,4]);
    console.log(a.splice(0, 1, 2))
</script>
```
