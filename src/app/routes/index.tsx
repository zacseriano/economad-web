import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}