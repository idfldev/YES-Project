export default function VideoTab({ videoUrl, onEmbed }) {
    return (
      //   <div className="shadow rounded overflow-hidden mb-6">
        <div className="relative">
            <iframe 
                src={videoUrl}
                className="w-full h-100"
                title="Video lesson"
                allowFullScreen
                onEmbed={onEmbed} // Assuming onEmbed is a prop to handle embedding events
            />
            <div className="flex gap-2 mt-4">
               <button className="bg-blue-600 text-white py-2 px-4 rounded">⏭ Continue</button>
               <button className="bg-gray-500 text-white py-2 px-4 rounded">⏸ Pause</button>
            </div>
        </div>
    );
}