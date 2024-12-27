"use client"

import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalStateContext = createContext();
const GlobalStateProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState("ABOUT");

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setCurrentSection(entry.target.dataset.section);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        const sections = document.querySelectorAll("[data-section]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <GlobalStateContext.Provider value={{ currentSection, setCurrentSection }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => useContext(GlobalStateContext);

export { GlobalStateProvider, useGlobalState };
