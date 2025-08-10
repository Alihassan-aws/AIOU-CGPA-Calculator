
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import SubjectList from "./SubjectList";
import ResultsDisplay from "./ResultsDisplay";
import { calculateCGPA } from "@/lib/gradeCalculator";
import { motion } from "framer-motion";

const CGPACalculator = () => {
  const [subjectCount, setSubjectCount] = useState<string>("2");
  const [subjects, setSubjects] = useState<{ id: number; name: string; marks: number; creditHours: number }[]>([
    { id: 1, name: "Subject 1", marks: 0, creditHours: 3 },
    { id: 2, name: "Subject 2", marks: 0, creditHours: 3 }
  ]);
  const [results, setResults] = useState<{
    cgpa: number;
    totalCreditHours: number;
    gradeDetails: Array<{
      creditHours: number;
      marks: number;
      grade: string;
      gp: number;
    }>;
  } | null>(null);

  // Handle subject count change
  const handleSubjectCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSubjectCount(inputValue);
    
    const count = parseInt(inputValue, 10) || 0;
    
    if (count > 0 && count <= 50) {
      // Update subject array based on new count
      if (count > subjects.length) {
        // Add more subjects
        const newSubjects = [...subjects];
        for (let i = subjects.length + 1; i <= count; i++) {
          newSubjects.push({ id: i, name: `Subject ${i}`, marks: 0, creditHours: 3 });
        }
        setSubjects(newSubjects);
      } else if (count < subjects.length) {
        // Remove excess subjects
        setSubjects(subjects.slice(0, count));
      }
    } else if (count <= 0) {
      // If invalid input or zero, clear subjects
      setSubjects([]);
    } else if (count > 50) {
      // Max 50 subjects
      setSubjectCount("50");
      
      const newSubjects = [...subjects];
      if (subjects.length < 50) {
        for (let i = subjects.length + 1; i <= 50; i++) {
          newSubjects.push({ id: i, name: `Subject ${i}`, marks: 0, creditHours: 3 });
        }
        setSubjects(newSubjects.slice(0, 50));
      } else {
        setSubjects(subjects.slice(0, 50));
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
  
  // Handle subject credit hours change
  const handleCreditHoursChange = (id: number, value: number) => {
    const newValue = value < 0 ? 0 : value > 4 ? 4 : value;
    setSubjects(
      subjects.map(subject => 
        subject.id === id ? { ...subject, creditHours: newValue } : subject
      )
    );
  };

  // Calculate results
  const calculateResults = () => {
    if (subjects.length === 0) return;

    const calculationResults = calculateCGPA(subjects);
    setResults(calculationResults);
    toast.success("Results calculated successfully!");
  };

  // Clear results
  const clearResults = () => {
    setResults(null);
    setSubjectCount("2");
    setSubjects([
      { id: 1, name: "Subject 1", marks: 0, creditHours: 3 },
      { id: 2, name: "Subject 2", marks: 0, creditHours: 3 }
    ]);
    toast.info("Results cleared");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 glass-card rounded-xl border border-white/10 shadow-xl"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col items-start">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-xl font-bold text-gradient"
          >
            Setup Your Calculation
          </motion.h2>
        </div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="mb-6 glass-effect p-4 rounded-lg border border-white/10 transition-all hover:border-white/20">
          <Label htmlFor="subjectCount" className="opacity-80 mb-2 block">
            Total number of subjects:
          </Label>
          <Input
            id="subjectCount"
            type="text"
            inputMode="numeric"
            value={subjectCount}
            onChange={handleSubjectCountChange}
            className="glass-input"
            placeholder="Enter number of subjects (max 50)"
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
            onCreditHoursChange={handleCreditHoursChange}
          />
        </motion.div>
      )}
      
      <motion.div 
        className="mt-6 space-y-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button 
          onClick={calculateResults} 
          disabled={subjects.length === 0}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate CGPA
        </Button>
        
        <Button 
          onClick={clearResults} 
          variant="outline" 
          className="w-full border-white/20 bg-transparent text-white font-medium py-3 transition-all duration-300 hover:bg-red-500 hover:border-red-500"
        >
          Clear Results
        </Button>
      </motion.div>

      {results && <ResultsDisplay results={results} />}
    </motion.div>
  );
};

export default CGPACalculator;
