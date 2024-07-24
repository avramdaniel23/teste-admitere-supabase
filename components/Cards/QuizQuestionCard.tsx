import {useState} from "react";

interface QuizProps {
    index: number,
    question: any,
    answers: any[],
    onAnswer: (name: any, value: any) => void
}

export default function QuizQuestionCard(props: QuizProps) {

    const [selected, setSelected] = useState<number>(-1)
    return (
        <div key={`q-${props.index}`} className={"flex flex-col items-center border-4 rounded-lg my-4 p-4 shadow-lg"}>
            <div className={"bg-blue-600 rounded-lg w-full h-fit min-h-20 p-4"}>
                <p className="px-4 text-justify text-[18px] text-white ">{props.index + 1}. {props.question.question}</p>

                {/*<p className={"text-white text-xs"}>Question ID: {props.question._id}</p>*/}
            </div>
            <div className={"flex w-full py-4 md:p-4 content-center items-center "}>
                {props.index % 2 == 1 && <img className={"w-full lg:w-3/4 m-auto rounded-lg border-2 border-blue-600"}
                     src={"https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={`Question ${props.index} picture`}></img>
                }
                </div>
            <div key={`${props.index}-answers`}
                 className={"my-8 grid gap-4 grid-cols-1 w-full md:grid-cols-2 m-4"}>
                {props.answers.map((value, index) => (
                    <div key={`${props.index}-${index}`}
                         className={`shadow border-2 rounded-lg p-4 w-full text-center ${selected == index && 'bg-blue-500 text-white'}`}
                         onClick={() => {
                             if (selected != index) {
                                 setSelected(index);
                                 props.onAnswer(props.question._id, value)
                             } else {
                                 setSelected(-1)
                                 props.onAnswer(props.question._id, null)
                             }
                         }}>
                        <p className={"my-4 w-full"}>{value}</p>
                        {props.index%3==0 && <img className={"w-full md:w-[90%] my-4 mx-auto rounded-lg"}
                             src={"https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={`Question ${props.index},option ${index} picture`}></img>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

