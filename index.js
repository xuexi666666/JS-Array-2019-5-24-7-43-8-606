// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
a.map(function (item,index,array) {
	return item*2;
})


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
console.log(colors.join(' ');
console.log(colors.join('+');
console.log(colors.join());
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
function compare(var1,var2) {
	if(var1 < var2){
		return -1;
	}

	else if(var1 > var2){
		return 1;
	}
	else{
		return 0;
	}
}

//TODO should output: [10,8,5,4,1]
console.log(a.sort(compare).reverse());


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
Array.prototype.getMost = function() {
	var obj = this.reduce((p,n) => (p[n]++ || (p[n] = 1),
				(p.max = p.max >= p[n] ? p.max : p[n]),
				(p.key = p.max > p[n] ? p.key : n),p),{}
				);
	return '次数最多的元素为:'+obj.key+',次数为:'+obj.max;
};
console.log(a.getMost());
