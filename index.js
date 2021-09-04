var r="";
r = "<span style='color:red'>hi</span>";
function show(){
var t=document.getElementById("time").value;
var p=  t.split("T");
var z=    p[0].split("-");

var cd=new Date(z[0]+"-"+z[1]+"-"+z[2]);

var d=new Date();


const diffTime = d - cd;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 




if(diffTime>0){
r="You forgot me"
}
else{
  r="Task Acomplished";
}

/*var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
*/

}



document.querySelector("#click").onclick = function () {

  show();
    if (
      document.querySelector(".inputField").value.length == 0 ||
      document.querySelector("#time").value.length == 0
    ) {
      if (document.querySelector(".inputField").value.length == 0) {
        alert("Please Enter a description");
      } else if (document.querySelector("#time").value.length == 0) {
        alert("Please Enter the time");
      }
    } else {
      var ttime = new Date(document.querySelector("#time").value);
      document.querySelector(".perfom").innerHTML += `
          <div class="perfom">
            <div class="tasktext">
              <span id="taskname">${document.querySelector(".inputField").value}</span>
              <br>
              <span id="message"></span>
            </div>
            <div class="taskdt">
              <span>${ttime.getMonth()}/${ttime.getDate()}/${ttime.getFullYear()}</span><br/>
              <span>${ttime.getHours()}:${ttime.getMinutes()}</span>
            </div>
            <div class="taskdone">
              <button class="mark">
                  mark as done
              </button>
            </div>
          </div>
      `;
      document.querySelector(".inputField").value = null;
      document.querySelector("#time").value = null;
      
  
     
    }
  
    var buttons = document.querySelectorAll(".mark");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
        let message = this.parentElement.parentElement.querySelector("#message");
        message.innerText = r;
      }
    }


     /* const display = document.getElementById('clock');

      function formatTime(time) {
        if ( time < 10 ) {
            return '0' + time;
        }
        return time;
    }
        function setAlarmTime(value) {
            alarmTime = value;
        }
        
        function setAlarm() {
            if(alarmTime) {
                const current = new Date();
                const timeToAlarm = new Date(alarmTime);
        
                if (timeToAlarm > current) {
                    const timeout = timeToAlarm.getTime() - current.getTime();
                    alarmTimeout = setTimeout(() => alert("You forgot me"), timeout);
                    alert('Alarm set');
                }
            }
        }
        setInterval(updateTime, 1000);
      */
    
  };
  