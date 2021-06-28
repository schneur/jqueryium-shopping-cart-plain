$(document).ready(function () {

  var sum = function (acc, x) { return acc + x; };

  var totals = [0];

  $('tbody tr').each(function (i, ele) {
    var price = Number($(ele).children('.price').text());
    var quantity = Number($(ele).find('input').val());
    var subtotal = price * quantity;
    $(ele).children('.subTotalPrice').html(subtotal);
    totals.push(subtotal);
    console.log(totals);
  });
  
  var subtotals = totals.reduce(sum);
  $('#total').html(subtotals);
});       