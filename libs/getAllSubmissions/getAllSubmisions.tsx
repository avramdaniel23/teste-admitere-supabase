import { useEffect, useState } from "react";

export default function getAllQuizzes() {
  const [submissions, setSubmissions] = useState<any[]>([]);

  const data = async () => {
    try {
      const response = await fetch("/api/get/allSubmissions", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} `);
      }
      const quizzes = await response.json();
      return quizzes;
    } catch (error) {
      console.log("Error fetching data:", error);
      throw error;
    }
  };
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizzes = await data();
        setSubmissions(quizzes);
      } catch (error) {
        console.error("Error fetching steps data:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return submissions;
}
