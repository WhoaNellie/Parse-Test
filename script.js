$(document).ready(function () {
    $(".input").focus(function () {
        $(document).on('keypress', function (e) {
            if (e.which == 13) {
                let inp = $(".input").val();
                renderMsg("right", inp);
                let res = getResponse(inp);
                renderMsg("left", res);
                $(".input").val("");

                $(".response").animate({
                    scrollTop: $(".response").get(0).scrollHeight
                }, 1000);
            }
        });
    });

});

function renderMsg(side, msg) {
    let div = `<div class="${side}">${msg}</div>`;
    $(".response").append(div);
}

function getResponse(input){
    let res = "Sorry, I haven't programmed a response to that.";

    let sentence = input.split(" ");
    let object = sentence[sentence.length - 1];
    sentence.pop();
    let verb = sentence.join(" ")
    console.log(verb);

    if(take.includes(verb)){
        res = `You pick up ${object}`;
    }

    
    return res;
}
