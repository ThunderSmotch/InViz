
//On Load check the structure of data folder and dynamically create the nav bar.
//Click Function for the NavBar elements
$(document).ready(function(){
    $("#navbox").load("navbox.html", function(){
        $("#navbox a").click(function(e){
            e.preventDefault();
            $("#content").load(e.target.href);
            setTimeout(function(){
            MathJax.typesetPromise();
        }, 100);
        });
    });  
});