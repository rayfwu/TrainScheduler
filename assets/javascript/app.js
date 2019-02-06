// Initialize Firebase
var config = {
apiKey: "AIzaSyCTTI3Diuxngk5EZUJqqqUdsPeXPpwiajQ",
authDomain: "trainscheduler-f730f.firebaseapp.com",
databaseURL: "https://trainscheduler-f730f.firebaseio.com",
projectId: "trainscheduler-f730f",
storageBucket: "trainscheduler-f730f.appspot.com",
messagingSenderId: "158121090419"
};
firebase.initializeApp(config);

function sayHi() {
    console.log("Hi");
}

function updateSchedule() {
    var name        = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var time        = $("#time-input").val().trim();
    var frequency   = $("#frequency-input").val().trim();

    var tableRow =  "<tr>" +
                    "<td>" + name + "</td>" +
                    "<td>" + destination + "</td>" +
                    "<td>" + frequency + "</td>" +
                    "<td>" + time + "</td>" +
                    "<td>" + "placeholder" + "</td>" +
                    "</tr>";

    $("#train-table").append(tableRow);

    clearForm();
}

function clearForm() {
    $("#name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
}

$("#submit-button").click(function() {
    updateSchedule();
});

// Autofilling test fields to quickly fill out the forms

$("#test-1").click(function() {
    $("#name-input").val("Thomas");
    $("#destination-input").val("New York");
    $("#time-input").val("03:30");
    $("#frequency-input").val("10");
});

$("#test-2").click(function() {
    $("#name-input").val("Delorean");
    $("#destination-input").val("Albany");
    $("#time-input").val("01:00");
    $("#frequency-input").val("20");
});

$("#test-3").click(function() {
    $("#name-input").val("Smithy");
    $("#destination-input").val("Philly");
    $("#time-input").val("02:00");
    $("#frequency-input").val("30");
});

/*
var now = moment();
var start = moment("03:00 AM", "hh:mm A");
var frequency = 10;
var minutesElapsed - start.diff(now, "minutes");
var stopsElapsed = Math.floor(minutesElapsed / frequency);
var nextStopMinutes = (stopsElapsed + 1) * frequency;

start.add(nextStopMinutes, "minutes");
console.log(start.format("hh:mm A"));
*/