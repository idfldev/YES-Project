import { useEffect, useState } from "react";

export function useLessonProgress(lessonId) {
  const [lessonDone, setLessonDone] = useState(false);
  const key = "lessonProgress";

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(key)) || {};
    if (saved[lessonId]?.done) {
      setLessonDone(true);
    }
  }, [lessonId]);

  useEffect(() => {
    if (lessonDone) {
      const saved = JSON.parse(localStorage.getItem(key)) || {};
      saved[lessonId] = { done: true };
      localStorage.setItem(key, JSON.stringify(saved));
    }
  }, [lessonDone, lessonId]);

  return { lessonDone, setLessonDone };
}
