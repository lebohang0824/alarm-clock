// Initialize
function init() {
	let alarm = document.getElementById('alarm');
	let nodes = createElements(alarm);

	// Start ticking
	start(nodes);
}

// Start 
function start(nodes) {

	let sec = -90 + getSeconds(),
		min = -90 + getMinutes(),
		hrs = -90 + getHours();

		console.log(getHours())

	setInterval(function() {

		/*
		 * I am adding by 6 because 360' devided by 60 min/sec = 6
		 */
		sec += 6;

		// Rotate
		rotate(nodes.sec, sec);
		rotate(nodes.min, min);
		rotate(nodes.hrs, hrs);

		// Reset seconds
		reset(sec, function () {
			min += 6;
			sec = -90;

			/*
			 * I'm using 0.5 because 360/12 hours = 30 then 30 / 60 min = 0.5
			 */
			hrs += 0.5;
		});
		
		// Reset Minutes
		reset(min, function () {
			min = -90;
		});

	}, 1000);
}

// Reset Min and Seconds
function reset(value, callback) {
	if (value === 270) {
		callback();
	}
}

// Rotate elements
function rotate(el, degs) {
	el.style.transform = `rotate(${degs}deg)`;
}  

// Create Element
function createElements(parent) {

	// Creat children
	let hrs = document.createElement('div');
	let min = document.createElement('div');
	let sec = document.createElement('div');

	// Append children
	parent.appendChild(hrs);
	parent.appendChild(min);
	parent.appendChild(sec);

	// Create Ids
	hrs.id = 'hours';
	min.id = 'minutes';
	sec.id = 'seconds';

	return { hrs, min, sec }
}

// Get current time seconds
function getSeconds() {
	return new Date().getSeconds() * 6;
}


// Get current time minutes
function getMinutes() {
	return new Date().getMinutes() * 6;
}

// Get current time hours
function getHours() {
	if (new Date().getHours() > 12) {
		return new Date().getHours() * 6 + (6 * 0.5);
	} else {
		return new Date().getHours() * 30 + (6 * 0.5);
	}
}

// Start
init();


