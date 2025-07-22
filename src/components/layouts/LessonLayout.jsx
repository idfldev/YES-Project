import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";
import TabSwitch from "../course/TabSwitch";
import ProgressTracker from "../course/ProgressTracker";
import Quiz from "../course/Quiz";
// import VideoTab from "../course/VideoTab";
import CongratPopup from "../course/CongratPopup";
import { useLessonProgress } from "../../hooks/useLessonProgress";
import lessons from "../../db/JSON/lessons.json"; // nếu lessons không truyền từ props
import React from "react";

export default function LessonLayout() {
  const lessonId = 1;
  const { lessonDone, setLessonDone } = useLessonProgress(lessonId);
  const [activeTab, setActiveTab] = useState("video");
  const [canProceed, setCanProceed] = useState(false);
  const [showCongrat, setShowCongrat] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);

  const handleQuizPassed = () => {
    setCanProceed(true);
    setShowCongrat(true);
    setTimeout(() => setShowCongrat(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="Justin" />
      <div className="px-6 pt-2">
        <ProgressTracker lessons={lessons} />
      </div>
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 p-6">
          <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} lessonDone={lessonDone} />
          <div className={`border-2 rounded-lg p-4 shadow bg-white mt-4 ${
            activeTab === "video"
              ? "border-[tomato]"
              : activeTab === "slide"
              ? "border-orange-500"
              : "border-blue-600"
          }`}>
            {/* {activeTab === "video" && <VideoTab onComplete={() => setLessonDone(true)} />} */}
            {activeTab === "slide" && <SlideTab onComplete={() => setLessonDone(true)} />}
            {activeTab === "quiz" && lessonDone && (
              <Quiz onPassed={handleQuizPassed} />
            )}
          </div>

          {canProceed && (
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">👉 Next Lesson</button>
          )}

          {showCongrat && <CongratPopup />}
        </main>

        <RightSide isOpen={rightOpen} toggle={() => setRightOpen(!rightOpen)} />
      </div>
    </div>
  );
}
