
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubjectList from "./SubjectList";
import ResultsDisplay from "./ResultsDisplay";
import { calculateGPA, getGrade } from "@/lib/gradeCalculator";

const CGPACalculator = () => {
  const [subjectCount, setSubjectCount] = useState<number>(1);
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
    const count = parseInt(e.target.value, 10) || 0;
    
    if (count > 0 && count <= 20) {
      setSubjectCount(count);
      
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

  // Handle subject name change
  const handleNameChange = (id: number, name: string) => {
    setSubjects(
      subjects.map(subject => 
        subject.id === id ? { ...subject, name } : subject
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
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6 text-gray-100">Setup Your Calculation</h2>
        
        <div className="mb-4">
          <Label htmlFor="subjectCount" className="text-gray-300 mb-2 block">
            Total number of subjects:
          </Label>
          <Input
            id="subjectCount"
            type="number"
            min="1"
            max="20"
            value={subjectCount}
            onChange={handleSubjectCountChange}
            className="bg-gray-700 border-gray-600 text-white"
            placeholder="Enter number of subjects"
          />
        </div>
      </div>

      <SubjectList 
        subjects={subjects} 
        onMarksChange={handleMarksChange}
        onNameChange={handleNameChange}
      />
      
      <div className="mt-6 mb-8">
        <Button 
          onClick={calculateResults} 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3"
        >
          Calculate CGPA
        </Button>
      </div>

      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

export default CGPACalculator;
