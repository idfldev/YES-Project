import { useState } from "react";

export default function Quiz({ onPassed }) {
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    const passingScore = 3;
    if (score >= passingScore) {
      onPassed();
    } else {
      alert("Bạn cần đạt đủ điểm để hoàn tất!");
    }
  };

  return (
    <div className="bg-white p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-3">📊 Quiz - Buổi học</h2>
      <p>Điểm hiện tại: {score} / 5</p>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Nộp bài Quiz
      </button>
    </div>
  );
}
