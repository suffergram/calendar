'use strict';

const TODAY = new Date();
const THISYEAR = new Date().getFullYear();
const THISMONTH = new Date().getMonth();

timer.append(TODAY);

setInterval(() => {
	timer.innerHTML = '';
	timer.append(new Date());
}, 1000);

createCalendar(calendar, THISYEAR, THISMONTH + 1);

function createCalendar(elem, year, month) {

	let date = new Date(year, month - 1);

	let table = document.createElement('table');
	elem.append(table);

	let daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	let daysInMonth = new Date(year, month, 0).getDate();
	let currentDay = 1;

	for (let i = 0; i < 7; i++) {

		let tr = document.createElement('tr');
		if (currentDay <= daysInMonth) table.append(tr);

		for (let j = 0; j < 7; j++) {
			let td = document.createElement('td');
			
			if (i == 0) {
				td = document.createElement('th');
				td.innerHTML = daysOfWeek[j];
			} else {
				if (i == 1 && j < date.getDay() - 1 || currentDay > daysInMonth) td.innerHTML = '';
				else {
					if (currentDay == TODAY.getDate()) td.className = 'now';
					td.innerHTML = currentDay;
					currentDay++;
				}
			}
			tr.append(td);
		}
	}

}

let today = new Date();
let x = '<div style="color: pink;">' + ('0' + today.getHours()).slice(-2) + '</div>';
x += ':<div style="color: lightgreen;">' + ('0' + today.getMinutes()).slice(-2) + '</div>';
x += ':<div style="color: lightblue;">' + ('0' + today.getSeconds()).slice(-2) + '</div>';
watches.innerHTML = x;

setInterval(() => {
	watches.innerHTML = '';
	let today = new Date();
	let x = '<div style="color: pink;">' + ('0' + today.getHours()).slice(-2) + '</div>';
	x += ':<div style="color: lightgreen;">' + ('0' + today.getMinutes()).slice(-2) + '</div>';
	x += ':<div style="color: lightblue;">' + ('0' + today.getSeconds()).slice(-2) + '</div>';
	watches.innerHTML = x;
	//watches.append(new Date().toLocaleTimeString());
}, 1000);









