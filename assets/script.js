
var DiadeHoy = $("#currentDay");
var horarios = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var horashow = [" 9am", "10am", "11am", "12pm", " 1pm", " 2pm", " 3pm", " 4pm", " 5pm"];
var horemp;
var today = moment();
var tablota = document.getElementById("tablota");
var now = moment().toObject();
var hrs = now.hours;
var ScheduleItem;
var Butt;
var conta;



//set current hour with format showing hour and minute

$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//function for creating the table showing working hours
function formatabla() {
    var i;
    var array = localStorage.getItem('myArray');

// loop for creating rows in the table with different working hours, and adding label, 
// input box and submit button
    for (i = 0; i < horarios.length; i++) {
        var hrreng = horarios[i];
        var hrsh = horashow[i];
        var renglon = document.createElement("div");
        tablota.appendChild(renglon);
        renglon.setAttribute("class", "row justify-content-center");
        renglon.setAttribute("id", "row");
        var lab = document.createElement("label");
        var inp = document.createElement("input");
        var but = document.createElement("button");
        var textRo2 = document.createTextNode(hrsh);

        renglon.appendChild(lab);
        renglon.appendChild(inp);
        renglon.appendChild(but);


        lab.setAttribute("class", "col col-lg-2");
        lab.setAttribute("class", "hour");
        lab.appendChild(textRo2);

        inp.setAttribute("class", "col col-lg-8");
        inp.setAttribute("class", "inptexto");
        inp.setAttribute("id", "c" + i);
        inp.setAttribute("type", "text");

        var stre = localStorage.getItem("c" + i);

        inp.setAttribute("value", stre);

        //condition for showing different color in the input box
        if (hrreng < hrs) {
            inp.setAttribute("class", "past");
        } else if (hrreng == hrs) {
            inp.setAttribute("class", "present");
        } else {
            inp.setAttribute("class", "future");
        }
   
        but.setAttribute("type", "submit");
        but.setAttribute("value", "Save");
        but.setAttribute("class", "col col-lg-2");
        but.setAttribute("class", "saveBtn");

    }
}

var Butt = document.getElementsByClassName('.saveBtn');


// running the function for creating table
formatabla();

// function in jquerry for giving functionality to the submit button 


$(".saveBtn").click(function () {
    event.preventDefault();

    for (i = 0; i < horarios.length; i++) {
        var ineer = document.getElementById("c" + i);
        var ind = ineer.value.trim();
        localStorage.setItem("c" + i, ind);

    }
});



