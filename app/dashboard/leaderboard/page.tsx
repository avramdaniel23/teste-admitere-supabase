import LeaderboardCard from "@/components/Cards/LeaderboardCard";
import LeaderboardTopCard from "@/components/Cards/LeaderboardTopCard";
import {Placement} from "@/components/Cards/LeaderboardTopCard";


export default function Leaderboard() {

  const f1: Placement = {
    name: "John",
    score: 9999
  }
  return <>
    <h1>Leaderboard</h1>
    <div className={"flex justify-center"}>
      <div className={"w-full lg:w-3/4 xl:w-1/2 flex flex-col justify-center "}>
        <LeaderboardTopCard f1={f1} f2={f1} f3={f1}></LeaderboardTopCard>
        <div className={"w-full h-1 my-2 bg-gray-500"}></div>
        <LeaderboardCard place={4} name={"John"} score={9999}></LeaderboardCard>
        <LeaderboardCard place={5} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={6} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={7} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={8} name={"John"} photo={""} score={9999}></LeaderboardCard>
        <LeaderboardCard place={9} name={"John"} photo={""} score={9999}></LeaderboardCard>

      </div>
    </div>
  </>
}
