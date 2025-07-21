export const api = {
   submitLessonProgress: (lessonId, userId) => {
      return fetch(".api.progress", {
         method: "POST",
         body: JSON.stringify({ lessonId, userId }),
         headers: { "Content-Type": "application/json" },
      });
   },

   fetchLessonContent: (lessonId) => {
      return fetch(`/api/lessons/${lessonId}`).then((res) => res.json());
   },

   fetchLessonProgress: (userId, lessonId) => {
      return fetch(`/api/progress?user=${userId}&lesson=${lessonId}`).then(
         (res) => res.json()
      );
   },

   fetchQuizQuestions: (lessonId) => {
      return fetch(`/api/quiz-questions?lesson=${lessonId}`).then((res) =>
         res.json()
      );
   },

   submitQuizAnswers: (userId, lessonId, answers) => {
      return fetch("/api/quiz-answers", {
         method: "POST",
         body: JSON.stringify({ userId, lessonId, answers }),
         headers: { "Content-Type": "application/json" },
      });
   },

   fetchQuizResult: (userId, lessonId) => {
      return fetch(`/api/quiz-results?user=${userId}&lesson=${lessonId}`).then(
         (res) => res.json()
      );
   },
   getUserProfile: (userId) => {
      return fetch(`/api/users/${userId}`).then((res) => res.json());
   },

   getLessons: () => {
      return fetch("/api/lessons").then((res) => res.json());
   },

   getUserProgress: (userId) => {
      return fetch(`/api/progress?user=${userId}`).then((res) => res.json());
   },

   getQuizHistory: (userId) => {
      return fetch(`/api/quiz-history?user=${userId}`).then((res) => res.json());
   },

   saveLessonNotes: (lessonId, notes) => {
      return fetch(`/api/lessons/${lessonId}/notes`, {
         method: "PUT",
         body: JSON.stringify({ notes }),
         headers: { "Content-Type": "application/json" },
      });
   },
   fetchLessonNotes: (lessonId) => {
      return fetch(`/api/lessons/${lessonId}/notes`).then((res) => res.json());
   },
   deleteLessonNotes: (lessonId) => {
      return fetch(`/api/lessons/${lessonId}/notes`, {
         method: "DELETE",
      });
   }

};
