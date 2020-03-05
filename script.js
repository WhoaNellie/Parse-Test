$(document).ready(function () {
    $(".input").focus(function () {
        $(document).on('keypress', function (e) {
            if (e.which == 13) {
                let inp = $(".input").val();

                if (inp.trim()) {
                    renderMsg("right", inp.trim());
                    let res = getResponse(inp.trim());
                    renderMsg("left", res);
                    $(".input").val("");

                    $(".response").animate({
                        scrollTop: $(".response").get(0).scrollHeight
                    }, 1000);
                }
            }
        });
    });

});

function renderMsg(side, msg) {
    let div = `<div class="${side}">${msg}</div>`;
    $(".response").append(div);
}

function getResponse(input) {
    input = input.toLowerCase();
    let res = "Sorry, I haven't programmed a response to that.";

    let sentence = input.split(" ");

    // add articles back in?
    sentence = sentence.filter(e => !articles.includes(e));
    console.log(sentence);

    let verb = sentence.filter(e => verbs.includes(e));
    if(verb){
        console.log(verb);
    }

    // two word objs? (water bottle)
    // and 'bottle of water'
    let obj = sentence.filter(e => objList.includes(e));
    console.log(obj);

    // switch case?
    if (verb && obj.length) {
        if (take.includes(verb.join(" "))) {
            res = `You pick up ${obj}`;
        } else if (trash.includes(verb)) {
            res = `You trash ${obj}`;
        }
    }
    return res;
}