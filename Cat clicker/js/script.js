var clickTimes = [0,0,0,0,0];

const catName = ["Ashes","Molly","Charlie","Tigger","Poppy","Oscar","Chester",
                 "Millie","Daisy","Max","Jasper","Trevor"];

/* for(let i=0;i<5;i++){
  $("#nameList").append("<li id='cat"+i+"'>" + catName[i] + '</li>');
}; */

for(let i=0;i<5;i++){
  $("#nameList").append("<button id='cat"+i+"'>" + catName[i] + '</button>');

  $("#cat"+i).click({ value: i },  function(e) {
      $(".pic").empty();
      let num = e.data.value;
      $(".pic").append("<h3>"+catName[num]+"</h3>");
      $(".pic").append("<img id='catPic"+num+"' src='img/cat"+num+".jpg' alt='Cute Cat' height='160' width='240'>");
      $(".pic").append("<p id='click_times"+num+"'>The times you click this cat pic: "+clickTimes[num]+".</p>");

      $("#catPic"+num).click(function(e) {
        //the element has been clicked... do stuff here
        clickTimes[num] = clickTimes[num] + 1;
        $("#click_times"+num).empty();
        $("#click_times"+num).append('<p>The times you click this cat pic: ' + clickTimes[num] + '.</p>');
      });

  });
};
