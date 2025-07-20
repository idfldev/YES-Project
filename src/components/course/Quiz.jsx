import { useState } from 'react';

export default function Quiz({ onPressed }) {
    const [score, setScore] = useState(0)

    const handleSubmit = () => {
        const passingScore = 3;
        if (score >= passingScore ) {
            onPressed(true);
        } else {
            onPressed(false);
            alert("You need to get enough points to pass the lesson!");
        }
    }
    return (
        <div className='bg-white p-4 border rounded shadow'>
            {/* Your Quiz location */}
            <p>👉 Total scores: {score} / 5</p>
            <button
                onClick={handleSubmit}
                className='mt-4 px-4 py-2 bg-green-600 text-white rounded'
            >
                Submit Quiz
            </button>

        </div>
    )
}