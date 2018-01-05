var quote;
var author;

$(document).ready (function(){
  function getNewQuote(){
  
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
      quote = response.quoteText;
      author =response.quoteAuthor;
        $("#quote").text (quote);
      if (author){
        $("#author").text (author);
      }
        else{
           $("#author").text ("Unknown");
        }
    }
    });
  }
      getNewQuote();
      $(".get-quote").on("click", function(event){
        event.preventDefault();
        getNewQuote();
        
        
       });
  $("#tweet-quote").on("click", function(event){
    event.preventDefault();
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + "--" + author));
  });
 
});