function sum()
{
var num=parseInt(document.getElementById("txtnum").value)
var priceitem=parseInt(document.getElementById("price").value)
var totalprice=num*priceitem
document.getElementById("total").value=totalprice

//alert ("Total is "+ totalprice)

}
