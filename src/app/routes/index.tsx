import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CriarDespesa, Dashboard } from "../pages";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/criar-despesa" element={<CriarDespesa />} />
            </Routes>
        </BrowserRouter>
    );
}