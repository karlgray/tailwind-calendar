export { buildCalendar };

	// return day of week to start mon = 1 sun = 7
	function getStartDay(month, year)
	{
		// Sunday is zero
		// month is jan = 0 we need to correct as we are using jan = 1
		month--;
		let startDay = (new Date(year, month)).getDay();

		if (startDay == 0) 
		{
			startDay = 7;  
		}
		return(startDay);
	}

	function getRowsInMonth(month, year)
	{
		var daysInWeek = 7;
		var startDay = getStartDay(month, year);
		var daysInMonth = getDaysInMonth(month, year);
		var numRows = (startDay + daysInMonth)/daysInWeek;

		if ((startDay + daysInMonth) % daysInWeek != 0)
		{
			numRows = numRows + 1;
		}

		numRows = Math.floor(numRows);
		return numRows
	}

	function getDaysInMonth(month, year)
	{
		return (new Date(year, month, 0).getDate());
	}

	function buildCalendar(month, year)
	{
		var startDay = getStartDay(month, year);
		var numRows = getRowsInMonth(month,year);
		var daysInMonth = getDaysInMonth(month, year);
		var day = 1;
		var row, column;

		for (row = 1; row <= numRows; row++)
		{
			var offset = 14;
			for (column = 1; column <= 7; column++)
			{
				var grid = document.createElement("div");
				grid.className = 'day-container';
				

				if ( (row == 1 && column <startDay ) || day > daysInMonth)
				{
					// In case we want to do anything with padding days.

					//am
					offset--;

					//pm
					offset--;

				}
				else
				{
					// Create date p element and add padding left class.
					var p = document.createElement('p');
					p.innerHTML = day;
					p.className = 'pl-2';
					grid.appendChild(p)
					grid.id = 'day-' + day;

					// Create event area.  div with an am and pm div within.
					var eventArea = document.createElement('div');
					eventArea.classList.add('grid', 'grid-cols-2');
					
					var am = document.createElement('div');
					am.id = 'event-area-am-' + day;
					am.dataset.maxSize = offset--;
					
					var pm = document.createElement('div');
					pm.id = 'event-area-pm-' + day;
					pm.dataset.maxSize = offset--;

					eventArea.appendChild(am);
					eventArea.appendChild(pm);
					
					grid.appendChild(eventArea);

					day++;
				}
				
				// do Grid border for last rows and last columns
				if (row == numRows)
				{
					grid.classList.add('bborder');
				}
				
				if (column == 7)
				{
					grid.classList.add('rborder');
				}

				// Add grid to calendar.

				var gridBody = document.getElementById("gridBody");
				gridBody.appendChild(grid);
			}
		}
	}

	// month = 1-12...
	//buildGrid(7,2021);



