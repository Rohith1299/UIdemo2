 
$(function(){
    var $movieDetails= $ ('#Movies') ;
    var $movieName =$('#movieName');
    var $Price =$('#Price');
    var $screenNO =$('#screenNO');
    var $theatreName =$('#theatreName');

    $ .ajax({
      type : 'GET',
      url : 'http://localhost:8080/MovieService/webresources/movie/details' ,
      success : function (movieDetails) {
        console.log(movieDetails.movieDetails);
        $.each ( movieDetails.movieDetails, function ( i ,movieDetails) {
           console.log(movieDetails)
          $movieDetails.append('<li>movieName: '+movieDetails.movieName+' , Price: '+movieDetails.price+',screenNo:'+movieDetails.screenNo+',theatreName:'+movieDetails.theatreName +'</li>');
        });
    },
    error: function(){
        alert('error loading Details');
    }
  });
    });
         
    
                                      /* Insert */
    $('#add-Movie').on('click',function()

    {      
 
         Movies()
 
     });    
 
 function Movies()
 {
 
     var url = "http://localhost:8080/MovieService/webresources/movie/insert";
  
     var Movies= {};

     Movies.movieName = $('#movieName').val();
 
     Movies.Price = $('#Price').val();
 
     Movies.screenNo = $('#screenNo').val();

     Movies.theatreName = $('#theatreName').val();
 
     if(Movies){
 
         $.ajax({
 
             url: url,
 
             contentType:"application/json; charset=utf-8",
 
             dataType: "json",
 
            data: JSON.stringify(Movies),
 
            type: "POST",
 
            success: function(result){
 
 
 
                 //getProduct();
 
 
 
                
 
 
 
                 alert("Movie Released");
 
 
 
             },
 
 
 
             error: function(msg){
 
 
 
                 alert(msg);
 
 
 
             }
 
 
 
         });
 
 
 
     }
 
 
 
 }