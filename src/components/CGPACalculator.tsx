
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubjectList from "./SubjectList";
import ResultsDisplay from "./ResultsDisplay";
import { calculateGPA, getGrade } from "@/lib/gradeCalculator";
import { motion } from "framer-motion";

const CGPACalculator = () => {
  const [subjectCount, setSubjectCount] = useState<string>("1");
  const [subjects, setSubjects] = useState<{ id: number; name: string; marks: number }[]>([
    { id: 1, name: "Subject 1", marks: 0 }
  ]);
  const [results, setResults] = useState<{
    gpa: number;
    percentage: number;
    grade: string;
  } | null>(null);

  // Handle subject count change
  const handleSubjectCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSubjectCount(inputValue);
    
    const count = parseInt(inputValue, 10) || 0;
    
    if (count > 0 && count <= 20) {
      // Update subject array based on new count
      if (count > subjects.length) {
        // Add more subjects
        const newSubjects = [...subjects];
        for (let i = subjects.length + 1; i <= count; i++) {
          newSubjects.push({ id: i, name: `Subject ${i}`, marks: 0 });
        }
        setSubjects(newSubjects);
      } else if (count < subjects.length) {
        // Remove excess subjects
        setSubjects(subjects.slice(0, count));
      }
    } else if (count <= 0) {
      // If invalid input or zero, clear subjects
      setSubjects([]);
    } else if (count > 20) {
      // Max 20 subjects
      setSubjectCount("20");
      
      const newSubjects = [...subjects];
      if (subjects.length < 20) {
        for (let i = subjects.length + 1; i <= 20; i++) {
          newSubjects.push({ id: i, name: `Subject ${i}`, marks: 0 });
        }
        setSubjects(newSubjects.slice(0, 20));
      } else {
        setSubjects(subjects.slice(0, 20));
      }
    }
  };

  // Handle subject marks change
  const handleMarksChange = (id: number, value: number) => {
    const newValue = value < 0 ? 0 : value > 100 ? 100 : value;
    setSubjects(
      subjects.map(subject => 
        subject.id === id ? { ...subject, marks: newValue } : subject
      )
    );
  };

  // Calculate results
  const calculateResults = () => {
    if (subjects.length === 0) return;

    const totalMarks = subjects.reduce((sum, subject) => sum + subject.marks, 0);
    const percentage = totalMarks / subjects.length;
    const gpa = calculateGPA(percentage);
    const grade = getGrade(percentage);

    setResults({
      gpa,
      percentage,
      grade
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 backdrop-blur-lg bg-gray-800/70 rounded-xl border border-gray-700/50 shadow-xl"
    >
      <motion.div 
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Setup Your Calculation</h2>
        
        <div className="mb-4 backdrop-blur-sm bg-gray-700/30 p-4 rounded-lg border border-gray-600/30 transition-all hover:shadow-lg">
          <Label htmlFor="subjectCount" className="text-gray-300 mb-2 block">
            Total number of subjects:
          </Label>
          <Input
            id="subjectCount"
            type="text"
            inputMode="numeric"
            value={subjectCount}
            onChange={handleSubjectCountChange}
            className="bg-gray-700/70 border-gray-600/50 text-white transition-all focus:ring-2 focus:ring-purple-500/50"
            placeholder="Enter number of subjects (max 20)"
          />
        </div>
      </motion.div>

      {subjects.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <SubjectList 
            subjects={subjects} 
            onMarksChange={handleMarksChange}
          />
        </motion.div>
      )}
      
      <motion.div 
        className="mt-6 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button 
          onClick={calculateResults} 
          disabled={subjects.length === 0}
          className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${subjects.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Calculate CGPA
        </Button>
      </motion.div>

      {results && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ResultsDisplay results={results} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CGPACalculator;
