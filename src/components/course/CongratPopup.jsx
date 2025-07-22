export default function CongratPopup() {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-yellow-50 border border-yellow-300 p-6 rounded-lg shadow-lg z-50 animate-bounce">
      <h2 className="text-xl font-bold text-yellow-700 mb-2">🎉 Tuyệt vời!</h2>
      <p className="text-gray-600">Bạn đã hoàn thành Quiz. Chuẩn bị sang buổi tiếp theo nhé!</p>
    </div>
  );
}
