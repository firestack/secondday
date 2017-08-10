$(()=>  {
    var date = new Date(2017, 8, 4, 15, 0, 0, 0);
    setInterval(() => {
        var hours = moment.duration(moment() - moment("20170804", "YYYYMMDD")).seconds();
        if(hours < 0){
            $("#countdownSpan")[0].innerHTML = Math.abs(hours) + " Hours Remain";
        }
        else{
            $("#countdownSpan")[0].innerHTML = Math.abs(hours) + " Hours Ago";
        }
    }, 1000/10);
});
