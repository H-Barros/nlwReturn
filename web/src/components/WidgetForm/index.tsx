import { useState } from "react";
import { ClosedButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugSvgUrl from "../../assets/bug.svg"
import ideaSvgUrl from "../../assets/idea.svg"
import otherSvgUrl from "../../assets/other.svg"
import { FeedbackContentStep } from "./Steps/FeedBackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedBackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugSvgUrl,
            alt: "Imagem de um inseto",
        }
    },
    IDEA: {
        title: "Idea",
        image: {
            source: ideaSvgUrl,
            alt: "Imagem de uma lâmpada",
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: otherSvgUrl,
            alt: "Imagem de um balão de conversa",
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const[feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                        feedbackType={feedbackType} 
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Copiado com amor da <a className="underline underline-offset-2" href="https://rocketseat.com.br">RocketSeat</a>
            </footer>
        </div>
    );
}