<<<<<<< HEAD
// Get elements from DOM
var language;
var appname = $("#app-name")[0];
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var changeBttn = $("#changeBttn")[0];
var city = $("#city")[0];
var country = $("#country")[0];
changeBttn.addEventListener("click", function () {
    appname.innerHTML = "Just a sec while we retrive the weather...";
    pageheader.innerHTML = "";
    changeUI();
});
function changeUI() {
    $.ajax({
        url: "http://api.wunderground.com/api/9622e93f368b974d/geolookup/conditions/q/" + country.value + "/" + city.value + ".json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var time = parsed_json['current_observation']['local_time_rfc822'];
            appname.innerHTML = "You are currently at " + location + " at " + time;
            pageheader.innerHTML = "The observed temperature is " + temp_c + "degrees Celcius";
            pagecontainer.style.marginTop = "20px";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}
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
=======
// Get elements from DOM
var language;
var appname = $("#app-name")[0];
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var changeBttn = $("#changeBttn")[0];
var city = $("#city")[0];
var country = $("#country")[0];
changeBttn.addEventListener("click", function () {
    appname.innerHTML = "Just a sec while we retrive the weather...";
    pageheader.innerHTML = "";
    changeUI();
});
function changeUI() {
    $.ajax({
        url: "http://api.wunderground.com/api/9622e93f368b974d/geolookup/conditions/q/" + country.value + "/" + city.value + ".json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_c = parsed_json['current_observation']['temp_c'];
            var time = parsed_json['current_observation']['local_time_rfc822'];
            appname.innerHTML = "You are currently at " + location + " at " + time;
            pageheader.innerHTML = "The observed temperature is " + temp_c + "degrees Celcius";
            pagecontainer.style.marginTop = "20px";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}
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
>>>>>>> a0ec6fd7dc83b7f94fd08317f4728c024cae3526
