import lessons from "../../db/JSON/lessons.json"; // nếu lessons không truyền từ props
import React from "react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`bg-gray-100 border-r transition-all duration-300 ${
        isOpen ? "w-64 p-4" : "w-0 p-0 overflow-hidden"
      }`}
    >
      <button onClick={toggleSidebar} className="text-xl mb-4">
        {isOpen ? "<" : "="}
      </button>

      {isOpen && (
        <ul className="space-y-2">
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className="flex items-center justify-between px-2 py-1 rounded hover:bg-gray-200"
            >
              <span>{lesson.title}</span>
              {lesson.completed ? <span>✅</span> : <span>🔒</span>}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
