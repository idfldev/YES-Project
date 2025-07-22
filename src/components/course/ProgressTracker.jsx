// src/components/ProgressTracker.jsx
// import React, { useEffect } from "react";

export default function ProgressTracker({ lessons, openChat, setOpenChat }) {
  const totalLessons = lessons.length;
  const completedCount = lessons.filter((l) => l.completed).length;
  const totalWeeks = Math.ceil(totalLessons / 4);
  const completedWeeks = Math.floor(completedCount / 4);


  return (
    <div className="bg-white border border-gray-300 rounded p-4 mb-4 shadow">
      <div className='flex items-center justify-between mb-2'>
        <h2 className="text-lg font-bold mb-2">📈 Tiến trình khóa học</h2>
        <button onClick={() => setOpenChat(!openChat)} className="mb-2 text-xl">{openChat ? "❌" : "💬"}</button>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        Hoàn thành <strong>{completedCount}</strong> / <strong>{totalLessons}</strong> buổi học
        &nbsp;|&nbsp; Tuần học: <strong>{completedWeeks}</strong> / <strong>{totalWeeks}</strong>
      </p>

      <div className="grid grid-cols-6 gap-1 sm:grid-cols-12">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`p-2 rounded text-center text-sm font-medium ${
              lesson.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            Buổi {lesson.id}
          </div>
        ))}
      </div>
    </div>
  );
}
