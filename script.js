var containerEl = $('.conatainer')
var currentHour

var currentDay = moment();
$("#currentDay").text(currentDay.format("ddd,AAAA Do"));

for (var i=9; i<16; i++) {
    var savedValueForHour = localStorage.getItem( "hour-" + i);
    
    var timeBlock = $("#hour-" + i)

    if (i == moment().hour()){
        timeBlock.addClass("present")
    }
    
        if (i < moment().hour()){
            timeBlock.addClass("past")
        }

        if (i > moment().hour()){
            timeBlock.addClass("future")
        }
    

}

var saveButtonEl = $("button");

saveButtonEl.click(function(event) {

    var hour = event.target.value;
    var task = event.target.parentElement.previousElementSibling.children[0].value;
    var hourData = {
        hour: hour,
        task: task
    }

    localStorage.setItem(hour,JSON.stringify(hourData))

});

function getToDos() {
    
    var retrieveData = [];

    for (var i=9; i<16; i++){
        var hourData = JSON.parse(localStorage.getItem(i));

        if (hourData) {
            retrieveData.push(hourData);
        };
    }

    return retrieveData;

};

function populateToDos() {
    var toDos = getToDos

    if (toDos.length == 0) {
        return
    }

    toDos.map(toDO ==> {
        $(`textarea[data-hour='${toDo.hour}']`).val(toDo.task); 
    }

}