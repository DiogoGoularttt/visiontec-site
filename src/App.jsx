import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

import './app.css'

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp />
        </AuthProvider>
    )
}

export default App;