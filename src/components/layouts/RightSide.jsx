export default function RightSide({ openChat, setOpenChat }) {
  return (
    <aside className={`bg-gray-100 border-l p-4 transition-all duration-300 ${
      openChat ? "w-72" : "w-0 overflow-hidden"
    }`}>
      {/* <button onClick={toggle} className="mb-2 text-xl">{openChat ? "❌" : "💬"}</button> */}
      {openChat && (
        <div>
          <h3 className="font-bold text-lg mb-2">💬 Hỏi đáp bài học</h3>
          <textarea className="w-full p-2 border rounded mb-2" rows="3" placeholder="Bạn thắc mắc gì không?" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">🧠 Gửi câu hỏi</button>
        </div>
      )}
    </aside>
  );
}
