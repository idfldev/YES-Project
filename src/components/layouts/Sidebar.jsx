import lessons from '../../db/JSON/lessons.json';

export default function Sidebar() {

    return (
        <div className='w-64 bg-gray-100 p-4 border-r transition-all'>
            
            <h2 className='font-bold text-lg mb-4'>Danh Sách Bài Học</h2>
            <ul className='space-y-2'>
                {lessons.map((lesson) => (
                    <li key={lesson.id} className='flex items-center justify-between'>
                        <span>{lesson.title}</span>
                        {lesson.completed ? (
                            <span>✅</span>
                        ) : (
                            <span className='text-gray-400'>🔒</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}