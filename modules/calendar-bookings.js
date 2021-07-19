




function insertBookings(bookings)
{

	bookings = sortBookings(bookings);
	console.dir (bookings);

	// set start and length for div, and split multiline bookings and set start and length for each segment, also handle truncated/end of month bookings or bookings that started before the start of the month.
	bookings = defineBookingsDivs(bookings); 

	// how many nbsp divs to place before event is inserted.
	bookings = calculatePaddingDivs(bookings);

	drawBookings(bookings);
	
}


var sortedBookings = new Array();
var group = new Array();
sortedBookings.push(group);

// Iterate through each booking and sort return sorted nested Array.
function sortBookings(bookings)
{
	for (const [key, booking] of Object.entries(bookings)) {
		insertBookingIntoSorted(booking);
	}
	// Remove empty 1st array element;
	sortedBookings.shift();
	return (sortedBookings);
}

function insertBookingIntoSorted(booking)
{
	// Check each group to see if it will fit.  due to group++ group id will be one higher in each test so group[0] is never used.
	for (var group = 0, grouplen = sortedBookings.length; group < grouplen; group++) {

		// Check each group member to see if it collides with the new booking.
		for (var groupmembers = 0, len = sortedBookings[group].length; groupmembers < len; groupmembers++) {
			var collision = false;
			// Does it collide?
			if (new Date(booking.start_date) >= new Date(sortedBookings[group][groupmembers].end_date) || new Date(booking.end_date) <= new Date(sortedBookings[group][groupmembers].start_date) )
			{
				// No collision on this entry, keep going.
				//console.log ("should be no collison");
				//console.log (booking.start_date + ">" + sortedBookings[group][groupmembers].end_date + "||" + booking.end_date + "<" + sortedBookings[group][groupmembers].start_date);
			}
			else
			{
				// The new one collides with this group member
				collision = true;
			}
		}

		//  There was no collision with this group.  insert it and return.
		if (collision == false)
		{
			sortedBookings[group].push(booking);
			return;
		}

	}
	
	//  We checked every group and there was a collision with each one.  Create a new group and add.
	var newgroup = new Array();
	newgroup.push(booking);
	sortedBookings.push(newgroup);

	return;
	
}

function findCollision(booking, index)
{

}

function defineBookingsDivs(bookings)
{

	return (bookings);
}


function calculatePaddingDivs(bookings)
{

	return (bookings);
}

function drawBookings(bookings)
{
	var testday = document.getElementById('event-area-pm-4');
	var p = document.createElement('p');
	p.innerHTML = 'a really long test element that should push beyond the borders by quite a lot';
	p.classList.add('whitespace-nowrap', 'truncate');
}

export { insertBookings };