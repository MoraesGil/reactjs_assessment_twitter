import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/presentation/pages/Home';
import GlobalStyles from '@/presentation/styles/GlobalStyles';

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <GlobalStyles />
        </>
    );
};

export default Router;
