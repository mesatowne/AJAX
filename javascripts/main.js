$(function(){
    var $favorites = $('#favorites');
    var $name = $('#name');
    var $drink = $('#drink');
    
$.ajax({
  type: 'GET',
  url: 'http://rest.learncode.academy/api/johnbob/friends',
  success: function(favorites) {
    $.each(favorites, function(i, favorite){
    $favorites.append('<li><strong>Your Name:</strong> ' + favorite.name + ' ,<strong>Your Favorite Beverage:</strong>  ' + favorite.drink + ' </li>');
        
    });
  }
    
 });
    
  $('#add-favorite').on('click', function(){
    var favorites = {
        name: $name.val(),
        drink: $drink.val(),
    };

    $.ajax({
        type: 'POST',
        url: 'http://rest.learncode.academy/api/johnbob/friends' ,
        data: favorites,
        success: function(favorites){
            $favorites.append('<li><strong>Your Name:</strong> ' + favorite.name + ' ,<strong>Your Favorite Beverage:</strong>  ' + favorite.drink + ' </li>');

        }
    });


});
});