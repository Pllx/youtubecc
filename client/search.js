function handleSearch(){
  var search_request = document.getElementById("searchbar").value;
  //console.log(search_request);
  $.post('/search',search_request).then(function(result){
    console.log(success);
  });

}
