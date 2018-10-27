/*
 *
 * DatePicker Class custom plugin customization
 *
 */
"use strict";
// import $ from 'jquery';

// Core Bootstrap DatePicker
require('bootstrap-datepicker');
// Include locale for Greek
require('bootstrap-datepicker/dist/locales/bootstrap-datepicker.el.min.js')
// Localize date display
require('jquery-dateformat/dist/jquery-dateFormat.js');

// Function copied from jquery UI
function noWeekends(date) {
	var day = date.getDay();
	return [day > 0 && day < 6, ""];
}

export default function () {
	console.log("Executing function for Datepicker");
	$(".datepicker").datepicker({
		todayBtn: "linked",
		keyboardNavigation: false,
		beforeShowDay: noWeekends,
		forceParse: true,
		calendarWeeks: true,
		autoclose: true,
		language: 'el'
	});
};