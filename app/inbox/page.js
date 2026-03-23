"use client";

import { useEffect, useState } from "react";
import { Paperclip, Search,Image as ImageIcon } from "lucide-react";
import {
  Inbox,
  Star,
  Send,
  FileText,
  AlertCircle,
  Trash2,
  Download,
  Info
} from "lucide-react";

export default function InboxPage() {
  const [emails, setEmails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  



  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const filteredEmails = emails.filter((mail) =>
  mail.name.toLowerCase().includes(search.toLowerCase()) ||
  mail.subject.toLowerCase().includes(search.toLowerCase())
);
const itemsPerPage = 12;
  const start = (page - 1) * itemsPerPage;
  const paginatedEmails = filteredEmails.slice(start, start + itemsPerPage);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.users.map((user, index) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          subject: "Our bachelor of computer science is ACBS credited",
          message: "This is a sample email  text.",
          time: ["8:38 AM", "8:13 AM", "7:52 PM", "4:13 PM"][index % 4],
          tag: ["Primary", "Work", "Social", "Friends"][index % 4],
          starred: index % 3 === 0,
        }));
        setEmails(formatted);
      });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      

      <div className="w-full lg:w-[286px] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-[14px] p-4 flex flex-col">

        <button className="w-full py-2 rounded-lg mb-6 font-medium 
bg-blue-500 text-white 
hover:bg-blue-600 
dark:bg-blue-600 dark:hover:bg-blue-700 
transition">
          + Compose
        </button>

        <div>
          <p className="text-gray-800 dark:text-gray-200 font-semibold text-sm mb-3">My Email</p>

          <ul className="space-y-2 text-sm">
            <li className="flex justify-between items-center 
px-3 py-2 rounded-lg 
text-gray-700 dark:text-gray-200
hover:bg-gray-50 dark:hover:bg-gray-700 
cursor-pointer transition">
              <div className="flex items-center gap-2">
                <Inbox size={16} />
                Inbox
              </div>
              <span>1253</span>
            </li>

            <li className="flex justify-between items-center 
px-3 py-2 rounded-lg 
text-gray-700 dark:text-gray-200
hover:bg-gray-50 dark:hover:bg-gray-700 
cursor-pointer transition">
              <div className="flex items-center gap-2">
                <Star size={16} />
                Starred
              </div>
              <span>245</span>
            </li>

            <li className="flex justify-between items-center 
px-3 py-2 rounded-lg 
text-gray-700 dark:text-gray-200
hover:bg-gray-50 dark:hover:bg-gray-700 
cursor-pointer transition">
              <div className="flex items-center gap-2">
                <Send size={16} />
                Sent
              </div>
              <span>24,532</span>
            </li>

            <li className="flex justify-between items-center 
px-3 py-2 rounded-lg 
text-gray-700 dark:text-gray-200
hover:bg-gray-50 dark:hover:bg-gray-700 
cursor-pointer transition">
              <div className="flex items-center gap-2">
                <FileText size={16} />
                Draft
              </div>
              <span>09</span>
            </li>

            <li className="flex justify-between items-center 
px-3 py-2 rounded-lg 
text-gray-700 dark:text-gray-200
hover:bg-gray-50 dark:hover:bg-gray-700 
cursor-pointer transition">
              <div className="flex items-center gap-2">
                <AlertCircle size={16} />
                Spam
              </div>
              <span>14</span>
            </li>

            <li className="flex justify-between items-center 
px-3 py-2 rounded-lg 
text-gray-700 dark:text-gray-200
hover:bg-gray-50 dark:hover:bg-gray-700 
cursor-pointer transition">
              <div className="flex items-center gap-2">
                <Trash2 size={16} />
                Bin
              </div>
              <span>9</span>
            </li>
          </ul>
        </div>

        <div className="mt-6">
  <p className="text-gray-500 dark:text-gray-300  text-sm mb-3">Label</p>

  <div className="space-y-3 text-sm">

    <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200">
      <input type="checkbox" className="accent-green-600 w-4 h-4" />
        Primary
      
    </label>

    <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200">
      <input type="checkbox" className="accent-blue-500 w-4 h-4" />
      
        Social
      
    </label>

    <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200">
      <input type="checkbox" className="accent-orange-500 w-4 h-4" />
      
        Work
      
    </label>

    <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-200">
      <input type="checkbox" className="accent-purple-600 w-4 h-4" />
      
        Friends
      
    </label>
    <br />
    <button className="text-gray-500 hover:text-blue-600 mt-2">
      + Create New Label
    </button>
  </div>
</div>
      </div>

      <div className="flex-1">
  {!selectedMail ? (

   <div className="flex-1 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-[14px] shadow-sm flex flex-col">

      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
        <div className="relative w-1/3">
  <Search
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
  />

  <input
    type="text"
    placeholder="Search mail"
    value={search}
    onChange={(e) => {
  setSearch(e.target.value);
  setPage(1);
}}
    
    className="w-full border border-gray-200 dark:border-gray-600 
  rounded-lg pl-10 pr-4 py-2 
  bg-white dark:bg-[#334155] 
  text-gray-800 dark:text-white 
  placeholder-gray-400 dark:placeholder-gray-300
  focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
          <button className="p-3 border-r hover:bg-gray-100 dark:hover:bg-gray-700">⬇️</button>
          <button className="p-3 border-r hover:bg-gray-100 dark:hover:bg-gray-700">ℹ️</button>
          <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700">🗑️</button>
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
  {paginatedEmails.map((mail) => (
    <div 
      key={mail.id}
      onClick={() => {
        setSelectedMail(mail);
        setMessages([
          { text: "Hello.", sender: "other" },
          { text: "Hi", sender: "me" },
        ]);
      }}
      className="grid grid-cols-[auto_auto_160px_120px_1fr_auto] items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-700 cursor-pointer text-sm"    >
      <input
        type="checkbox"
        checked={selectedIds.includes(mail.id)}
        onClick={(e) => e.stopPropagation()}
        onChange={() => {
          setSelectedIds((prev) =>
            prev.includes(mail.id)
              ? prev.filter((id) => id !== mail.id)
              : [...prev, mail.id]
          );
        }}
      />

      <span
        onClick={(e) => {
          e.stopPropagation();
          setEmails((prev) =>
            prev.map((item) =>
              item.id === mail.id
                ? { ...item, starred: !item.starred }
                : item
            )
          );
        }}
        className={`cursor-pointer text-lg ${
          mail.starred ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
        }`}
      >
        ★
      </span>

      <p className="font-medium truncate text-gray-800 dark:text-gray-200">{mail.name}</p>

      <span
        className={`text-xs px-2 py-1 rounded-full w-fit ${
          mail.tag === "Primary"
            ? "bg-green-100 text-green-600"
             : mail.tag === "Work"
            ? "bg-orange-100 text-orange-600"
            : mail.tag === "Social"
            ? "bg-blue-100 text-blue-600"
            : "bg-purple-100 text-purple-600"
        }`}
      >
        {mail.tag}
      </span>

      <p className="text-gray-500 truncate">{mail.subject}</p>

      <span className="text-gray-400 dark:text-gray-500 text-xs">{mail.time}</span>
    </div>
  ))}
</div>


       <div className="flex items-center justify-between p-3 border-t text-sm text-gray-500 ">

  <p>Showing {start + 1}–{Math.min(start + itemsPerPage, emails.length)} of {filteredEmails.length}</p>

  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">

    <button
  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
  className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 border-r"
>
  ‹
</button>

<button
  onClick={() =>
    setPage((prev) =>
      prev < Math.ceil(emails.length / itemsPerPage) ? prev + 1 : prev
    )
  }
  className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"
>
  ›
</button>

  </div>
</div>
    </div>

  ) : (

    <div className="bg-white dark:bg-[#334155] text-gray-800 dark:text-white rounded-[14px] border border-gray-100 dark:border-gray-700 shadow-sm h-full flex flex-col">

      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={() => setSelectedMail(null)}>←</button>

          <p className="font-semibold">
            {selectedMail.name}
          </p>

          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded">
            {selectedMail.tag}
          </span>
        </div>

        <div className="w-full border border-gray-200 dark:border-gray-600 rounded-lg pl-10 pr-4 py-2 
bg-white dark:bg-[#334155] text-gray-800 dark:text-white 
focus:outline-none focus:ring-2 focus:ring-blue-500">
          <button className="p-3 border-r hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">⬇️</button>
          <button className="p-3 border-r hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">ℹ️</button>
          <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700">🗑️</button>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.sender === "me" ? "justify-end" : "gap-3"
      }`}
    >
      {msg.sender === "other" && (
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
      )}

      <div
        className={`p-4 rounded-xl max-w-[60%] text-sm ${
          msg.sender === "me"
            ? "bg-blue-500 text-white"
            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            
        }`}
      >
        {msg.text}
      </div>
    </div>
  ))}
</div>

      <div className="border-t border-gray-100 dark:border-gray-700 p-3 flex flex-col sm:flex-row items-center gap-2 ">

  <input 
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Write message"
    className="w-full sm:flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#334155] text-gray-800 dark:text-white "
  />

  <div className="flex items-center gap-2 ">
    <button className="p-2 text-gray-500 dark:text-gray-300 hover:text-blue-500">
      <Paperclip size={20} />
    </button>

    <button className="p-2 text-gray-500 dark:text-gray-300 hover:text-blue-500">
      <ImageIcon size={20} />
    </button>

    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
      Send
    </button>
  </div>

</div>
</div>
  )}
  </div>
</div>
  );
}