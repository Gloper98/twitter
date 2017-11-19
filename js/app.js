window.addEventListener('load', function(event) {
   var tweet = document.getElementById('input-write');
    var father =document.getElementById('maker');
    var button = document.getElementById('submit');
    var twitter = document.createElement('div');
    
    button.addEventListener('click', function(event){
        var text= document.createTextNode(tweet.innerHTML)
        twitter.textContent = text;
        console.log(twitter.textContent);
        console.log(twitter);
        
    })
})