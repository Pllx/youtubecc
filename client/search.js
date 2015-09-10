function handleSearch(){
  var search_request = document.getElementById("searchbar").value;
  console.log(search_request);
  var request = {};
  request.query = search_request;
  $.post('/search',request).then(function(result){
    console.log(result);
  });

  // var request = gapi.client.youtube.search.list({
  //   q: search_request,
  //   part: 'snippet'
  // });

  // request.execute(function(response){
  //   var str = JSON.stringify(response.result);
  //   console.log('str is ', str);
  // });
}
