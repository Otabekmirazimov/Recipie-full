import { useContext } from "react";
import { ThemeProvider } from "../context/ThemeContext";

export function useThemeContext() {
    const context = useContext(ThemeProvider)

    if (!context) {
        throw new Error("useTheme must be used within a Provider")
    }

    return context
}