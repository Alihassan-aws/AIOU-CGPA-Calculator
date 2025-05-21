
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="glass-card border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-center text-gradient">Results</CardTitle>
          <CardDescription className="text-center opacity-80">
            Based on the AIOU grading system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <motion.div 
              className="p-4 rounded-lg glass-effect border border-white/10 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm opacity-70 mb-1">GPA</p>
              <p className="text-3xl font-bold text-blue-400">{gpa.toFixed(2)}</p>
            </motion.div>
            
            <motion.div 
              className="p-4 rounded-lg glass-effect border border-white/10 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm opacity-70 mb-1">Grade</p>
              <p className={`text-3xl font-bold ${getGradeColor(grade)}`}>{grade}</p>
            </motion.div>
            
            <motion.div 
              className="p-4 rounded-lg glass-effect border border-white/10 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm opacity-70 mb-1">Percentage</p>
              <p className="text-3xl font-bold text-purple-400">{percentage.toFixed(2)}%</p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResultsDisplay;
