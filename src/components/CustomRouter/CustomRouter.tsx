import { BrowserHistory } from "history";
import { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

export const CustomRouter = (
    {
        history,
        ...props
    }: { history: BrowserHistory } & any) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location
    });

    useLayoutEffect(() => {
        history.listen(setState);
    }, []);

    return (
        <Router
            {...props}
            location={state.location}
            navigator={history}
            navigationType={state.action}
        />
    );
};

