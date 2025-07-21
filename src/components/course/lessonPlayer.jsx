export default function LessonPlayer({ videoUrl }) {
    return (
        <div className="shadow rounded overflow-hidden mb-6">
            <iframe 
            src={videoUrl}
            className="w-full h-100"
            title="Video lesson"
            allowFullScreen
            />
        </div>
    )
}