
export default function Sidebar({ lessons, isOpen, toggleSidebar }) {

    return (
        <aside className={`bg-gray-100 p-4 border-r transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
            <button onClick={toggleSidebar} className="mb-4 text-xl">
                {isOpen ? '<' : '≡'}
            </button>
            {isOpen && (
                <ul className='space-y-2'>
                    {lessons.map((lesson) => (
                        <li key={lesson.id} className={`flex items-center justify-between p-2 rounded ${lesson.completed ? 'bg-green-200' : 'bg-red-200'}`}>
                            <span>{lesson.title}</span>
                            {lesson.completed ? '✅' : '🔒'}
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    )
}