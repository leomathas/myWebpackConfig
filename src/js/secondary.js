import $ from 'jquery';


const secondaryQuery = $('document').ready(function () {
	console.log('3. jquery secondaryjs');
});

const arrow = () => {
	console.log('4. arrow function secondaryjs');
}

export {
	secondaryQuery,
	arrow
}