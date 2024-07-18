interface Configuration {
  name: string;
  materie: string;
  capitol: string;
  dificultate: string;
  numarIntrebari: string;
  privacy: boolean;
}

export const fetchQuestionsData = async (configuration: Configuration) => {
  const { materie, capitol, dificultate, numarIntrebari } = configuration;

  const queryParams = new URLSearchParams({
    materie,
    capitol,
    dificultate,
    numarIntrebari,
  }).toString();

  const url = `/api/get/filteredQuestions?${queryParams}`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const fetchedQuestions = await response.json();
    const questionIDs = fetchedQuestions.questions.map(
      (question: any) => question._id
    );
    return questionIDs;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

export const submitQuizz = async (
  configuration: Configuration,
  questionsIDS: []
) => {
  const dataToBeSent = { config: configuration, questionsIDS };
  try {
    const response = await fetch("/api/post/createQuizz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBeSent),
    });
    if (response.ok) {
      console.log("Quiz successfully created");
    } else {
      alert("Error submitting the form. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting quiz:", error);
    alert("Failed to submit the form. Please try again later.");
  }
};
