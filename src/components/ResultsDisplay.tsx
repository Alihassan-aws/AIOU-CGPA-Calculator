
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface ResultsDisplayProps {
  results: {
    gpa: number;
    percentage: number;
    grade: string;
  };
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const { gpa, percentage, grade } = results;
  
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
      case "A":
        return "text-green-400";
      case "B":
        return "text-blue-400";
      case "C":
        return "text-yellow-400";
      case "D":
        return "text-orange-400";
      case "F":
        return "text-red-500";
      default:
        return "text-white";
    }
  };

  return (
    <Card className="border-gray-700/50 backdrop-blur-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Results</CardTitle>
        <CardDescription className="text-center text-gray-400">
          Based on the AIOU grading system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <motion.div 
            className="p-4 rounded-lg backdrop-blur-md bg-gray-700/30 border border-gray-600/30 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-400 mb-1">GPA</p>
            <p className="text-3xl font-bold text-blue-400">{gpa.toFixed(2)}</p>
          </motion.div>
          
          <motion.div 
            className="p-4 rounded-lg backdrop-blur-md bg-gray-700/30 border border-gray-600/30 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className="text-sm text-gray-400 mb-1">Grade</p>
            <p className={`text-3xl font-bold ${getGradeColor(grade)}`}>{grade}</p>
          </motion.div>
          
          <motion.div 
            className="p-4 rounded-lg backdrop-blur-md bg-gray-700/30 border border-gray-600/30 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="text-sm text-gray-400 mb-1">Percentage</p>
            <p className="text-3xl font-bold text-purple-400">{percentage.toFixed(2)}%</p>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
