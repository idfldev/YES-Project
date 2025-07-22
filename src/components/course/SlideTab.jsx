import { useState } from "react";

export default function SlideTab({ slides = [], onComplete }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      onComplete(); // ✅ Kích hoạt sau khi xem hết slide
    }
  };

  const handleBack = () => {
    if (!isFirst) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const slide = slides[currentSlide];

  if (!slide) return <p className="text-red-500">⚠️ Không có nội dung slide.</p>;

  return (
    <div className="bg-white p-4 rounded shadow border border-orange-500">
      <h2 className="text-xl font-bold mb-3">{slide.title}</h2>
      <p className="whitespace-pre-line text-gray-700">{slide.content}</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={isFirst}
          className="px-4 py-2 rounded bg-gray-300 text-white"
        >
          ⬅ Trở lại
        </button>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded ${
            isLast ? "bg-green-600" : "bg-orange-400"
          } text-white`}
        >
          {isLast ? "🎯 Hoàn tất bài học" : "➡ Tiếp theo"}
        </button>
      </div>
    </div>
  );
}
