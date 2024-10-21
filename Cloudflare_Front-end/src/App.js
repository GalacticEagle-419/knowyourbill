import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages";
import { Layout } from "./Components";
import { BrowserTracing } from "@sentry/tracing";
import { Toaster } from "react-hot-toast";
import * as Sentry from "@sentry/react";

try {
    Sentry.init({
        dsn: process.env.REACT_APP_SENTRY_URL,
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0,
    });
} catch (error) {
    console.log("Ignore: Sentry init issue!")
}

function App() {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <Routes>
                <Route path="/" element={< Layout />} >
                    <Route path="/" element={< Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
