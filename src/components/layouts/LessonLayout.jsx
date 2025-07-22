import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";
import TabSwitch from "../course/TabSwitch";
import ProgressTracker from "../course/ProgressTracker";
import Quiz from "../course/Quiz";
import VideoTab from "../course/VideoTab";
// import slideData from "../../db/JSON/lessonSlides.json";
import { useSlidesByLesson } from "../../hooks/useSlidesByLesson";
import SlideTab from "../course/SlideTab";
import CongratPopup from "../course/CongratPopup";
import { useLessonProgress } from "../../hooks/useLessonProgress";
import lessonsRaw from "../../db/JSON/lessons.json"; // nếu lessons không truyền từ props
import React from "react";

// ==============================================
export default function LessonLayout() {

  const lessonId = 1;
  // const [lessonDone, setLessonDone] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [showCongrat, setShowCongrat] = useState(false);
  const [activeTab, setActiveTab] = useState("video");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);
  const [lessons, setLessons] = useState(lessonsRaw);

  const slides = useSlidesByLesson(lessonId);

  const { lessonDone, setLessonDone } = useLessonProgress(lessonId);

  const slidesData = slides.map((slide, index) => ({
    id: index + 1,
    ...slide
  }));

  // Load progress from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("lessonProgress")) || {};
    if (saved[lessonId]?.done) {
      setLessonDone(true);
    }

    const updatedLessons = lessons.map((l) => ({
      ...l,
      completed: saved[l.id]?.done || false,
    }));
    setLessons(updatedLessons);
  }, []);

  // After quiz passed
  const handleQuizPassed = () => {
    setCanProceed(true);
    setShowCongrat(true);

    const saved = JSON.parse(localStorage.getItem("lessonProgress")) || {};
    saved[lessonId] = { done: true };
    localStorage.setItem("lessonProgress", JSON.stringify(saved));

    setTimeout(() => setShowCongrat(false), 3000);
  };

  const unlockQuiz = () => {
    setLessonDone(true);
    setActiveTab("quiz");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="Justin" />
      <div className="px-6 pt-2">
        <ProgressTracker lessons={lessons} openChat={rightOpen} setOpenChat={setRightOpen} />
      </div>


      <div className="flex flex-1">
        <Sidebar openSidebar={sidebarOpen} setOpenSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-6">
          <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} lessonDone={lessonDone} />
          
          <div
            className={`border-2 rounded-lg p-4 shadow bg-white mt-4 ${
              activeTab === "video"
                ? "border-[tomato]"
                : activeTab === "slide"
                ? "border-orange-500"
                : "border-blue-600"
            }`}
          >
            {activeTab === "video" && <VideoTab onComplete={unlockQuiz} />}
            {activeTab === "slide" && <SlideTab slides={slidesData} onComplete={unlockQuiz} />}
            {activeTab === "quiz" && lessonDone && <Quiz onPassed={handleQuizPassed} />}
          </div>

          {canProceed && (
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
              👉 Next Lesson
            </button>
          )}

          {showCongrat && <CongratPopup />}
        </main>
        <RightSide isOpen={rightOpen} toggle={() => setRightOpen(!rightOpen)} />
      </div>
    </div>
  );
}


// =============================================
