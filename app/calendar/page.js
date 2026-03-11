"use client";

import { useState } from "react";

export default function CalendarPage() {

const [date,setDate] = useState(new Date());
const [events,setEvents] = useState({});
const [showModal,setShowModal] = useState(false);
const [selectedDay,setSelectedDay] = useState(null);
const [eventTitle,setEventTitle] = useState("");
const [eventMessage,setEventMessage] = useState("");

const month = date.toLocaleString("default",{month:"long"});
const year = date.getFullYear();

const firstDay = new Date(year,date.getMonth(),1).getDay();
const daysInMonth = new Date(year,date.getMonth()+1,0).getDate();

const startOffset = firstDay === 0 ? 6 : firstDay - 1;

const days = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

const calendarDays = [];

for(let i=0;i<startOffset;i++){
calendarDays.push({day:null});
}

for(let i=1;i<=daysInMonth;i++){
calendarDays.push({day:i,current:true});
}

let nextDay = 1;

while(calendarDays.length % 7 !== 0){
calendarDays.push({day:nextDay++,next:true});
}

function prevMonth(){
setDate(new Date(year,date.getMonth()-1,1));
}

function nextMonth(){
setDate(new Date(year,date.getMonth()+1,1));
}

function openModal(day){
setSelectedDay(day);
setShowModal(true);
}

function addEvent(){

if(!eventTitle) return;

const key = `${year}-${date.getMonth()}-${selectedDay}`;

setEvents({
...events,
[key]:{
title:eventTitle,
message:eventMessage
}
});

setEventTitle("");
setEventMessage("");
setShowModal(false);
}

return(

<div className="bg-[#f6f8fb] min-h-screen flex justify-center pt-[100px]">

<div className="flex gap-[24px]">


<div className="w-[286px] h-[900px] bg-white rounded-xl shadow-sm p-6">

<button
onClick={()=>setShowModal(true)}
className="w-full bg-blue-500 text-white py-2 rounded-lg mb-8"
>
+ Add New Event
</button>

<p className="text-sm text-gray-400 mb-4">
You are going to
</p>

<div className="space-y-6">

{Object.entries(events).map(([key,data],i)=>{

const [y,m,d] = key.split("-");
const eventMonth = new Date(y,m).toLocaleString("default",{month:"long"});

return(

<div key={i} className="flex gap-3">

<img
src={`https://i.pravatar.cc/40?img=${i+10}`}
className="w-10 h-10 rounded-full"
/>

<div>

<h3 className="text-sm font-semibold">
{data.title}
</h3>

<p className="text-xs text-gray-500">
{data.message}
</p>

<p className="text-xs text-gray-400">
{d} {eventMonth} {y}
</p>

<div className="flex mt-2">

<img src="https://i.pravatar.cc/24?img=1" className="w-6 h-6 rounded-full border-2 border-white"/>
<img src="https://i.pravatar.cc/24?img=2" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
<img src="https://i.pravatar.cc/24?img=3" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>

<div className="w-6 h-6 bg-blue-500 text-white text-[10px] flex items-center justify-center rounded-full -ml-2">
15+
</div>

</div>

</div>

</div>

)

})}

</div>

</div>


<div className="w-[834px] h-[900px] bg-white rounded-xl shadow-sm p-6">

<div className="flex justify-between items-center mb-6">

<div className="flex items-center gap-4">

<button
onClick={prevMonth}
className="text-gray-400 text-xl"
>
‹
</button>

<h2 className="font-semibold text-lg">
{month} {year}
</h2>

<button
onClick={nextMonth}
className="text-gray-400 text-xl"
>
›
</button>

</div>

<div className="flex gap-2">

<button className="px-3 py-1 text-xs border rounded-md">
Day
</button>

<button className="px-3 py-1 text-xs border rounded-md">
Week
</button>

<button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md">
Month
</button>

</div>

</div>


<div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">

{days.map((day)=>(

<div key={day} className="py-2 font-medium">
{day}
</div>

))}

</div>


<div className="grid grid-cols-7 border rounded-lg overflow-hidden">

{calendarDays.map((item,index)=>{

const key = `${year}-${date.getMonth()}-${item.day}`;
const event = events[key];

return(

<div
key={index}
onClick={()=>item.current && openModal(item.day)}
className={`h-[110px] border relative p-2 text-sm cursor-pointer
${item.next ? "bg-gray-50 text-gray-300" : "hover:bg-[#f8fafc]"}`}
>

{item.day && (
<span className="absolute top-2 right-3 text-xs">
{item.day}
</span>
)}

{event && (

<div className="bg-purple-400 text-white text-xs px-2 py-1 rounded mt-6 w-fit">
{event.title}
</div>

)}

{!item.day && (

<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f0f3f7,#f0f3f7_10px,#e5e9f2_10px,#e5e9f2_20px)]">
</div>

)}

</div>

)

})}

</div>

</div>

</div>


{showModal && (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-6 rounded-lg w-[350px]">

<h2 className="text-lg font-semibold mb-4">
Add Event
</h2>

<p className="text-sm mb-3">
Day: {selectedDay} {month}
</p>

<input
value={eventTitle}
onChange={(e)=>setEventTitle(e.target.value)}
placeholder="Event title"
className="border w-full p-2 rounded mb-3"
/>

<textarea
value={eventMessage}
onChange={(e)=>setEventMessage(e.target.value)}
placeholder="Event message"
className="border w-full p-2 rounded mb-4"
rows={3}
/>

<div className="flex justify-end gap-2">

<button
onClick={()=>setShowModal(false)}
className="px-3 py-1 border rounded"
>
Cancel
</button>

<button
onClick={addEvent}
className="px-3 py-1 bg-blue-500 text-white rounded"
>
Save
</button>

</div>

</div>

</div>

)}

</div>

);

}