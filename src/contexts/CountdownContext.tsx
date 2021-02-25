import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContexData {
    minutes: number;
    seconds: number;
    hasFiniched: boolean;
    isActive: boolean;
    startContdown: () => void;
    resetContdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContexData )

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [ time, setTime ] = useState(0.1 * 60); // trasnform context
    const [ isActive, setIsActive ] = useState(false); // trasnform context
    const [ hasFiniched, setHasFinished ] = useState(false);

    const minutes = Math.floor( time/60 );
    const seconds = time % 60;

    function startContdown() {
        setIsActive(true);
    }

    function resetContdown() {  
        clearTimeout(countdownTimeout);
        setIsActive(false); 
        setTime(0.1 * 60) 
        setHasFinished(false);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time -1);
            }, 1000);
        } else if ( isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{
           minutes,
           seconds,
           hasFiniched,
           isActive,
           startContdown,
           resetContdown, 
        }}>
            {children}
        </CountdownContext.Provider>
    )
}