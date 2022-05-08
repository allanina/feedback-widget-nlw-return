import { CloseButton } from "./CloseButton";

import bugIconUrl from '../assets/bug-icon.png';
import ideaIconUrl from '../assets/idea-icon.png';
import otherIconUrl from '../assets/others-icon.png';

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        icon: {
            source: bugIconUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        icon: {
            source: ideaIconUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: 'Outros',
        icon: {
            source: otherIconUrl,
            alt: 'Imagem de um arco-íris',
        }
    },
};

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe sua avaliação</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none">
                            <img className="w-14" src={value.icon.source} alt="" />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>

            <footer className="text-xs text-neutral-400">Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/allanina">Allana</a></footer>
        </div>
    )
};