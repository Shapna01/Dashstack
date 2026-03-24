"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter ,useSearchParams } from "next/navigation";
export default function CalendarPage() {

const [date,setDate] = useState(new Date());
const [events, setEvents] = useState({});
const params = useParams();
const searchParams = useSearchParams();
const router = useRouter();

const paramYear = searchParams.get("year");
const paramMonth = searchParams.get("month");
const paramDay = searchParams.get("day");

useEffect(() => {
  const saved = localStorage.getItem("events");
  if (saved) {
    setEvents(JSON.parse(saved));
  }
}, []);
useEffect(() => {
  localStorage.setItem("events", JSON.stringify(events));
}, [events]);

useEffect(() => {
  if (params.day && params.month && params.year) {
    setSelectedDay(params.day);
    setDate(new Date(params.year, params.month - 1, params.day));
    setShowModal(true);
  }
}, [params]);

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

const prevMonthDays = new Date(year, date.getMonth(), 0).getDate();

for (let i = startOffset; i > 0; i--) {
  calendarDays.push({
    day: prevMonthDays - i + 1,
    prev: true
  });
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

function openModal(day) {
  setSelectedDay(day);
  setShowModal(true);
  const newParams = new URLSearchParams(window.location.search);
  newParams.set("year", date.getFullYear());
  newParams.set("month", date.getMonth() + 1);
  newParams.set("day", day);

  router.replace(`${window.location.pathname}?${newParams.toString()}`);
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
    
<div><br />
<div className="text-3xl font-bold text-gray-800  ">Calendar</div>
<br />
<div className="flex flex-col xl:flex-row gap-6">

<div className="w-full xl:w-[350px] bg-white rounded-2xl  border border-gray-300 shadow-sm p-6">

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
src={`https://i.pravatar.cc/40?img=5`}
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

<img src="https://i.pravatar.cc/40?img=5" className="w-6 h-6 rounded-full border-2 border-white"/>
<img src="https://i.pravatar.cc/40?img=5" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
<img src="https://i.pravatar.cc/40?img=5" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>

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


<div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-6">
<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

<div className="flex items-center gap-4">

<button
 onClick={prevMonth}
 className="text-gray-400 text-xl"
>
‹
</button>

<h2 className="font-semibold text-xl text-gray-700">
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


<div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-3 font-medium">

{days.map((day)=>(

<div key={day} className="py-2 font-medium">
{day}
</div>

))}

</div>


<div className="grid grid-cols-7 border border-gray-300 rounded-lg overflow-hidden">

{calendarDays.map((item,index)=>{

const key = `${year}-${date.getMonth()}-${item.day}`;
const event = events[key];

return(

<div
key={index}
onClick={()=>item.current && openModal(item.day)}
className={`min-h-[90px] md:min-h-[130px] border  border-gray-200 relative p-2 text-sm cursor-pointer
${item.prev || item.next 
  ? "bg-[#f8fafc] text-gray-400" 
  : "bg-white hover:bg-[#f1f5f9]"}`}
>

{item.day && (
<span className="absolute top-2 right-3 text-xs">
{item.day}
</span>
)}

{event && (

<div className="bg-purple-500 text-white text-xs px-2 py-1 rounded-md mt-6 w-fit shadow-sm">
{event.title}
</div>

)}

{item.prev && (
  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f1f5f9,#f1f5f9_8px,#e2e8f0_8px,#e2e8f0_16px)] opacity-60"></div>
)}


</div>

)

})}

</div>

</div>

</div>


{showModal && (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-6 rounded-lg w-[90%] max-w-[350px]">

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