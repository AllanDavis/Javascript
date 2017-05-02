var cd = document.getElementById('current-date');
var ct = document.getElementById('current-time');
var monthNames = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];


setInterval(updateTime, 1000);

function updateTime() {
	var d = new Date();
	var hours = d.getHours();
	if (hours > 12) {
		hours -= 12;
	} else if (hours === 0) {
		hours += 12;
	}
	
	var currenDate = d.getDate() + " " + monthNames[d.getMonth()] + " " + (d.getYear() + 1900);
	var currentTime = hours + ":" + ((d.getMinutes()<10?'0':'') + d.getMinutes()) + ":" + d.getSeconds();


	cd.innerHTML = currenDate;
	ct.innerHTML = currentTime;
}

