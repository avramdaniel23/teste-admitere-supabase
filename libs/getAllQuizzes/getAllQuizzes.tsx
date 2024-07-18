import { useEffect, useState } from "react";

export default function getAllQuizzes() {
  const [quizzes, setQuizzes] = useState<any[]>([]);

  const data = async () => {
    try {
      const response = await fetch("/api/get/allQuizzes", {
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
        setQuizzes(quizzes);
      } catch (error) {
        console.error("Error fetching steps data:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return quizzes;
}
