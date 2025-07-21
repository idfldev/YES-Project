import { useState } from 'react';

import Header from './Header';
import ProgressingBar from '../core/ProgressingBar';
import Sidebar from './Sidebar';
import LessonPlayer from '../course/lessonPlayer';
import Quiz from '../course/Quiz';
import lessons from '../../db/JSON/lessons.json';

useEffect(() => {
  const savedProgress = JSON.parse(localStorage.getItem('lessonProgress'));
  if (savedProgress?.[lessonId]?.done) {
    setLessonDone(true);
  }
}, []);

useEffect(() => {
  if (lessonDone) {
    const progress = JSON.parse(localStorage.getItem('lessonProgress')) || {};
    progress[lessonId] = { done: true };
    localStorage.setItem('lessonProgress', JSON.stringify(progress));
  }
}, [lessonDone]);

export default function LessonLayout() {
    const [canProceed, setCanProceed] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header userName="Justin"/>
            <div className='px-6 pt-2'>
                {/* <ProgressingBar /> */}
                <div className="bg-gray-200 h-3 rounded-full mb-2">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className='text-sm text-gray-600'>Completed: 35%</p>
            </div>
            <div className='flex flex-1'>
                <Sidebar 
                    lessons={lessons}
                    isOpen={isSidebarOpen}
                    toggleSidebar={() => setSidebarOpen((prev) => !prev)}
                />
            
                <main className='flex-1 p-6 bg-white mb-5'>
                    <LessonPlayer videoUrl="https://sokvn.com/assets/Medias/video_1_.mp4" />
                    <Quiz onPressed={(status) => setCanProceed(status)} />
                    <div className='flex justify-center gap-4 mt-6'>
                        <button className='bg-green-600 text-white px-4 py-2 rounded'>💾 Lesson</button>
                        <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded'>🔄 Reset</button>
                        <button className='bg-yellow-500 text-white px-4 py-2 rounded'>❓ Hint</button>
                        <button className='bg-red-500 text-white px-4 py-2 rounded'>📤 Exit</button>
                    </div>
                    {canProceed && (
                        <button className='mt-6 px-4 py-2 bg-blue-600 text-white rounded'>
                            👉 Next Lesson
                        </button>
                    )}
                </main>
            </div>
        </div>
    )
}