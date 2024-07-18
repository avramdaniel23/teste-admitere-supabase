export default function deleteAll() {
  const del = async (e: any) => {
    const deleteAll = await fetch("/api/delete/allQuizzes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <button
      className="uppercase bg-neon-blue p-4 text-center text-white rounded-lg w-full mb-4"
      onClick={del}>
      Sterge tot
    </button>
  );
}
