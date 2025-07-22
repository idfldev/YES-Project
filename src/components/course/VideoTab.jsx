// export default function VideoTab({ videoUrl, onEmbed }) {
                // src="https://sokvn.com/assets/Medias/video_1_.mp4"
import { useRef } from "react";

export default function VideoTab({ onComplete }) {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime && video.duration) {
      const threshold = 0.95; // Học viên xem từ 95% trở lên
      if (video.currentTime >= video.duration * threshold) {
        onComplete(); // ✅ Gọi khi gần cuối video
      }
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        className="w-full rounded shadow mb-4 border border-[tomato]"
      >
        <source src="/videos/buoi-1.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>

      <div className="flex gap-2 mt-4">
        <button className="px-4 py-2 bg-[tomato] text-white rounded">⏯ Tiếp tục</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded">⏹ Dừng</button>
      </div>
    </div>
  );
}

//     return (
//       //   <div className="shadow rounded overflow-hidden mb-6">
//         <div className="relative">
//             <iframe 
//                 src="https://sokvn.com/assets/Medias/video_1_.mp4"
//                 className="w-full h-100"
//                 title="Video lesson"
//                 allowFullScreen
//                 onEmbed={onEmbed} // Assuming onEmbed is a prop to handle embedding events
//             />
//             <div className="flex gap-2 mt-4">
//                <button className="bg-blue-600 text-white py-2 px-4 rounded">⏭ Continue</button>
//                <button className="bg-gray-500 text-white py-2 px-4 rounded">⏸ Pause</button>
//             </div>
//         </div>
//     );
// }