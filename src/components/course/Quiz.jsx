import quiz from '../../db/JSON/section_1_1.json';
import { useState } from 'react';

export default function Quiz({ onPressed }) {
    const [score, setScore] = useState(0)
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        const requiredScore = 3;
        setSubmitted(true);
        // Calculate the score based on the quiz data
        // Check if the score is enough to proceed
        if (score >= requiredScore) {
            onPressed(true);
        } else {
            alert("You need to get enough points to pass the lesson!");
            onPressed(false);
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