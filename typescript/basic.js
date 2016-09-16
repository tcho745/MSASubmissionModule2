var currentMood;
// Get elements from DOM
var language;
var appname = $("#appname")[0];
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var textSelector = $("textInput").val();
var inputBttn = $("#inputBttn")[0];
inputBttn.addEventListener("click", function () {
    if (textSelector = null) {
        pageheader.innerHTML = "Please insert what you are thinking of";
    }
    else {
        appname.innerHTML = "Just a sec while we analyse...";
        pageheader.innerHTML = "";
        sendTextRequest(textSelector, function (detectedLanguages) {
            currentMood = getCurrMood(detectedLanguages);
            language = detectedLanguages.name;
            changeUI();
        });
    }
});
function changeUI() {
    //Show detected mood
    appname.innerHTML = "Your mood is: " + currentMood.name;
    pageheader.innerHTML = "your detected language is: " + language;
    //Show mood emoji
    var img = $("#selected-img")[0];
    img.src = currentMood.emoji;
    img.style.display = "block";
    //Remove offset at the top
    pagecontainer.style.marginTop = "20px";
}
function sendTextRequest(file, callback) {
    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/languages?",
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "3d52b1f257d54d19b59a2ac42e203d90");
        },
        type: "POST",
        data: file
    })
        .done(function (data) {
        if (data.length != 0) {
            // Get the emotion scores
            var detectedLanguages = data[0].detectedLanguages;
            callback(detectedLanguages);
        }
        else {
            pageheader.innerHTML = "Hmm, we can't seem to detect your input. Try another?";
        }
    })
        .fail(function (error) {
        pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
        console.log(error.getAllResponseHeaders());
    });
}
;
var Mood = (function () {
    function Mood(mood, emojiurl) {
        this.mood = mood;
        this.emojiurl = emojiurl;
        this.name = mood;
        this.emoji = emojiurl;
    }
    return Mood;
});
var Mood = (function () {
    function Mood(mood, emojiurl) {
        this.mood = mood;
        this.emojiurl = emojiurl;
        this.name = mood;
        this.emoji = emojiurl;
    }
    return Mood;
});
var happy = new Mood("happy", "http://emojipedia-us.s3.amazonaws.com/cache/a0/38/a038e6d3f342253c5ea3c057fe37b41f.png");
var sad = new Mood("sad", "https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji.png?9898922749706957214");
var neutral = new Mood("neutral", "https://cdn.shopify.com/s/files/1/1061/1924/files/Neutral_Face_Emoji.png?9898922749706957214");
function getCurrMood(detectedLanguages) {
    if (detectedLanguages.score > 0.7) {
        currentMood = happy;
    }
    else if (detectedLanguages.score < 0.4) {
        currentMood = sad;
    }
    else {
        currentMood = neutral;
    }
    return currentMood;
}
;
$(document).ready(function () {
    $('#share_button').click(function (e) {
        e.preventDefault();
        FB.ui({
            method: 'feed',
            name: 'This is the content of the "name" field.',
            link: 'https://johnchosubmissionmodule2.azurewebsites.net/',
            picture: 'http://www.hyperarts.com/external-xfbml/share-image.gif',
            caption: 'This is the content of the "caption" field.',
            description: 'This is the content of the "description" field, below the caption.',
            message: ''
        });
    });
});
