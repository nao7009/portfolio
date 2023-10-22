// jQuery
//変数
const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const today = new Date();

//月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(),today.getMonth(),1);

//初期表示
window.onload = function(){
    showProcess(today,calender);
};

//前の月表示
function prev(){
    showDate.setMonth(showDate.getMonth()-1);
    showProcess(showDate);
}

//次の月表示
function next(){
    showDate.setMonth(showDate.getMonth()+1);
    showProcess(showDate);
}

//カレンダー表示
function showProcess(date){
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年" + (month+1) + "月";

    var calender = createProcess(year,month);
    document.querySelector('#calender').innerHTML = calender;
}

//カレンダー作成
function createProcess(year,month){
    //曜日
    var calender = "<table><tr class='dayOfWeek'>";
    for(var i = 0; i < week.length; i++){
        calender += "<th>" + week[i] + "</th>";
    }
    calender += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year,month,1).getDay();
    var endDate = new Date(year,month+1,0).getDate();
    var lastMonthEndDate = new Date(year,month,0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    //1行ずつ設定
    for(var i = 0; i < row; i++){
        calender += "<tr>";
        for(var j = 0; j < week.length; j++){
            if(i == 0 && j < startDayOfWeek){
                //1行目で1日まで先月の日付を設定
                calender += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j +1) + "</td>";
            }else if(count >= endDate){
                //最終行で最終日以降、翌月の日付を設定
                count++;
                calender += "<td class='disabled'>" + (count - endDate) + "</td>";
            }else{
                //当月の日付を曜日に照らし合わせて設定
                count++;
                if(year == today.getFullYear() && month == (today.getMonth()) && count == today.getDate()){
                    calender += "<td class='today'>" + count + "</td>";
                }else{
                    calender += "<td>" + count + "</td>";
                }
            }
        }
        calender += "</tr>";
    }
    return calender;
}




$(function(){
    //スライド(index.html)
    $(".header__contents--slide").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //スライド(menu.html)
    $(".slider").slick({
        accessibility: false,
        fade: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 2000,
        dots: false,
        swipe: false,
        arrows: false,
    });
    
    //フェードイン
    $('body').hide().fadeIn(1500);
});

