

var budget = prompt("Ваш бюджет?","0");
var name = prompt("Название вашего магазина?","");


mainlist = {
	budget: budget,
	Shopname: name,
	shopGoods: [],
	eployers: {},
	open: false,
};

mainlist.shopGoods[0] = prompt("Какой тип товаров будем продавать?","");
mainlist.shopGoods[1] = prompt("Какой тип товаров будем продавать?","");
mainlist.shopGoods[2] = prompt("Какой тип товаров будем продавать?","");
alert("Ваш бюджет в день: " + (mainlist.budget/30));

console.log(mainlist);