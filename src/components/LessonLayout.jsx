import { useState } from 'react';

import Header from './core/Header';
import ProgressingBar from './core/ProgressingBar';
import Sidebar from './Sidebar';
import LessonPlayer from './lessonPlayer';
import Quiz from './Quiz';

export default function LessonLayout() {
    const [canProceed, setCanProceed] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                
            <div className="flex min-h-screen">
                {isSidebarOpen && <Sidebar />}
                <div className='flex-1 p-6'>
                    <ProgressingBar />

                    <LessonPlayer videoUrl="https://sokvn.com/assets/Medias/video_1_.mp4" />
                    <Quiz onPressed={(status) => setCanProceed(status)} />
                    {canProceed && (
                        <button className='mt-6 px-4 py-2 bg-blue-600 text-white rounded'>
                            👉 Next Lesson
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}