import './stylesheets';
import $ from 'jquery';



import 'bootstrap';
import datePicker from './datepicker';

// Random JS file
import {
	secondaryQuery,
	arrow
} from './secondary';

console.log('1. simple console.log');

function text(string) {
	console.log(string);
}
$('document').ready(function () {
	text('2. doc.ready indexjs');
});

secondaryQuery;
arrow();
// End - Random JS file


datePicker();
