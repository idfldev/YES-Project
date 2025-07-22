
export default function LessonLayout() {
  // const [isSidebarOpen, setSidebarOpen] = useState(false);
  const lessonId = 1;
  const slides = useSlidesByLesson(lessonId);
  
  const [canProceed, setCanProceed] = useState(false);
  const [showCongrat, setShowCongrat] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);

  // const handleQuizPassed = () => {
  //   setCanProceed(true);
  //   setShowCongrat(true);
  //   setTimeout(() => setShowCongrat(false), 4000);
  // };

  const { lessonDone, setLessonDone } = useLessonProgress(lessonId);
  const [activeTab, setActiveTab] = useState("video");

  const unlockQuiz = () => {
    setLessonDone(true);
    setActiveTab("quiz");
  }

  const handleQuizPassed = (status) => {
    if (status) {
      setShowCongrat(true); // 🎉 Hiện popup
      setCanProceed(true);  // ✅ Cho phép chuyển buổi tiếp theo

      // Tắt popup sau 3 giây
      setTimeout(() => setShowCongrat(false), 3000);

      // Cập nhật buổi học đã hoàn thành vào localStorage
      const key = "lessonProgress";
      const saved = JSON.parse(localStorage.getItem(key)) || {};
      saved[lessonId] = { done: true }; // đánh dấu buổi đã xong
      localStorage.setItem(key, JSON.stringify(saved));
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} userName="Justin" />
      {/* <Header userName="Justin" /> */}
      <div className="px-6 pt-2">
        <ProgressTracker lessons={lessons} openChat={rightOpen} setOpenChat={setRightOpen} />
      </div>
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 p-6">
          <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} lessonDone={lessonDone} />
          <div className={`border-2 rounded-lg p-4 shadow bg-white mt-4 ${activeTab === "video"
            ? "border-[tomato]"
            : activeTab === "slide"
              ? "border-orange-500"
              : "border-blue-600"
            }`}>
            {activeTab === "video" && <VideoTab onComplete={() => setLessonDone(true)} />}
            {activeTab === "slide" && (
              <SlideTab slides={slides} onComplete={{ unlockQuiz }} />
            )}
            {activeTab === "quiz" && lessonDone && (
              <Quiz onPassed={handleQuizPassed} />
            )}
          </div>

          {canProceed && (
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">👉 Next Lesson</button>
          )}

          {showCongrat && <CongratPopup />}
        </main>

        <RightSide openChat={rightOpen} setOpenChat={setRightOpen} />
      </div>
    </div>
  );
}
