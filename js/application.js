var updateCosts = function () {

  var sum = function (acc, x) { return acc + x; };

  var totals = [0];

  $('tbody tr').each(function (i, ele) {
    var price = Number($(ele).children('.price').text());
    var quantity = Number($(ele).find('input').val());
    var subtotal = price * quantity;
    $(ele).children('.subTotalPrice').html(subtotal + ".00");
    totals.push(subtotal);
    console.log(totals);
  });

  var subtotals = totals.reduce(sum);
  $('#total').html(subtotals + ".00");

}

$(document).ready(function () {
  updateCosts();

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateCosts();
  });
  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateCosts();
    }, 550);
  }); 

  $('#addStock').on('submit', function (event) {
    event.preventDefault();
    var name = $(this).children('.itemName').val();
    var price = $(this).children('.price').val();
    var quantity = $(this).children('.quantity').val();
  
    $('tbody').append('<tr>' +
      '<td class="itemName">' + name + '</td>' +
      '<td class="price">' + price + '</td>' +
      '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
      '<td class="subTotalPrice"></td>' +
      '<td><button class="btn btn-warning btn-sm remove">remove</button></td>' +
    '</tr>');

    updateCosts();
    
    $(this).children('.itemName').val('');
    $(this).children('.price').val('');
    $(this).children('.quantity').val('');
  });
});   

