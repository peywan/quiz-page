// src/pages/index.js
import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../../utils/fetchQuestions'; // Justera sökvägen baserat på din projektmappstruktur

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    getQuestions();
  }, []); // En tom beroendearray säkerställer att effekten endast körs en gång

  return (
    <div>
      {/* Render your questions here */}
    </div>
  );
}
