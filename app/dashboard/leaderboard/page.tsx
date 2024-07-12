import LeaderboardCard from "@/components/Cards/LeaderboardCard";

export default function Leaderboard() {
  return <>
    <h1>Leaderboard</h1>
    <div className={"flex justify-center"}>
      <div className={"w-full lg:w-3/4 xl:w-1/2 flex flex-col justify-center "}>
        <LeaderboardCard place={1} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={2} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={3} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <div className={"w-full h-1 bg-gray-500"}></div>
        <LeaderboardCard place={4} name={"John"} score={9999}></LeaderboardCard>
        <LeaderboardCard place={5} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={6} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={7} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={8} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={9} name={"John"} photo={""} score={9999}></LeaderboardCard>

      </div>
    </div>
    ;
  </>
}
