$(document).ready(function(){
    $(".input").focus(function(){
        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                alert('You pressed enter!');
            }
        });
    });
    
});