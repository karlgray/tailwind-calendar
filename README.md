Introduction

I am not a front end developer and haven't done much in the way of javascript before.

I needed a calendar that would allow me to book timeslots that go overnight.  Think campsites, hotels, parking slots etc.

For various reason I decided to do this in raw JS without any dependencies and using tailwind to give a nice look.

Please forgive any newbie errors or missing any ways I could have done this easier.  I am open to suggestions.

This is very much early days for this project and it will improve over the next period of time.

It is currently made of 3 parts.
index.html which contains the header for the calendar.

Then 2 JS modules.
The base calendar module
The event module.

The base calendar module accepts the following call.

buildCalendar( month, year )
Where month is a number, no leading zero with January being 1 and December being 12.

It will then display the calendard.

The event module is just being started and this will display events on the calendar in a similar manner as Google Calendar does.

https://github.com/karlgray/tailwind-calendar/blob/master/calendar.png

![Alt text](/karlgray/tailwind-calendar/blob/master/calendar.png?raw=true )
