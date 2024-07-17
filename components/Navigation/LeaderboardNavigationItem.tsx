export type LeaderboardNavigationProps = {
    text: string
    className: string
}

export default function LeaderboardNavigationItem(props: LeaderboardNavigationProps) {
    return (
        <div className={`${props.className} content-center text-center px-6 transition-all duration-500`}>{props.text}</div>
)
}