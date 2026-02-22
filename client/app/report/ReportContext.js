"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ReportContext = createContext();

const initialData = {
    // Page 1: Personal Info
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    // Page 2: Incident Details (Narrative)
    narrative: '',
    // Page 3: Evidence (URLs from upload)
    mediaUrls: [],
    // Page 4: Safety Preferences
    timeSlot: 'morning',
    contactMethod: 'phone',
    noPriorNotice: false,
    // Other fields to support old schema mapping
    title: 'Secure Report',
    location: '',
    incidentDate: new Date().toISOString()
};

export const ReportProvider = ({ children }) => {
    const [formData, setFormData] = useState(initialData);
    const [isInitialized, setIsInitialized] = useState(false);
    const router = useRouter();

    // Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem('adj_gbv_draft');
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse draft", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('adj_gbv_draft', JSON.stringify(formData));
        }
    }, [formData, isInitialized]);

    // Auto-submit logic (1 hour of inactivity)
    let timeoutId;
    const resetTimer = useCallback(() => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => {
            // Auto submit
            try {
                const SERVER_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
                await axios.post(`${SERVER_URL}/api/reports`, {
                    ...formData,
                    title: "Auto-submitted Draft"
                });
                localStorage.removeItem('adj_gbv_draft');
                router.push('/');
            } catch (err) {
                console.error("Auto submit failed:", err);
            }
        }, 60 * 60 * 1000); // 1 hour
    }, [formData, router]);

    useEffect(() => {
        // Listen for user activity
        const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
        events.forEach(e => window.addEventListener(e, resetTimer));
        resetTimer(); // init
        return () => {
            events.forEach(e => window.removeEventListener(e, resetTimer));
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [resetTimer]);

    const updateFormData = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const clearData = () => {
        setFormData(initialData);
        localStorage.removeItem('adj_gbv_draft');
    };

    return (
        <ReportContext.Provider value={{ formData, updateFormData, clearData }}>
            {children}
        </ReportContext.Provider>
    );
};

export const useReportContext = () => useContext(ReportContext);
