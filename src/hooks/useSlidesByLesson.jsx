import { useMemo } from "react";
import lessonSlideData from "../db/JSON/lessonSlides.json";

export function useSlidesByLesson(lessonId) {
  const slides = useMemo(() => {
    const lessons = lessonSlideData.lessonSlides;
    if (!Array.isArray(lessons)) return [];

    const selected = lessons.find((item) => item.lessonId === lessonId);
    return selected ? selected.slides : [];
  }, [lessonId]);

  return slides;
}
