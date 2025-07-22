export default function TabSwitch({ activeTab, setActiveTab, lessonDone }) {
  const tabs = [
    { id: "video", label: "🎥 Video", color: "bg-[tomato]" },
    { id: "slide", label: "📄 Slide", color: "bg-orange-500" },
    { id: "quiz", label: "📊 Quiz", color: "bg-blue-600" },
  ];

  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            if (tab.id !== "quiz" || lessonDone) setActiveTab(tab.id);
          }}
          className={`px-4 py-2 rounded text-white ${tab.color} ${
            tab.id === "quiz" && !lessonDone ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
