
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ResultsDisplayProps {
  results: {
    cgpa: number;
    totalCreditHours: number;
    gradeDetails: Array<{ 
      creditHours: number; 
      marks: number; 
      grade: string; 
      gp: number 
    }>;
  };
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const { cgpa, totalCreditHours, gradeDetails } = results;
  
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
      case "A":
        return "text-green-400";
      case "B+":
      case "B":
        return "text-blue-400";
      case "C+":
      case "C":
        return "text-yellow-400";
      case "D+":
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
            Based on the provided grading system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Table>
              <TableHeader className="bg-black/20">
                <TableRow>
                  <TableHead className="text-white">Cr. Hrs.</TableHead>
                  <TableHead className="text-white">Marks %</TableHead>
                  <TableHead className="text-white">Grade</TableHead>
                  <TableHead className="text-white">GP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradeDetails.map((detail, index) => (
                  <TableRow key={index} className="glass-effect border-y border-white/10">
                    <TableCell className="text-white">{detail.creditHours}</TableCell>
                    <TableCell className="text-white">{detail.marks.toFixed(0)}</TableCell>
                    <TableCell className={getGradeColor(detail.grade)}>{detail.grade}</TableCell>
                    <TableCell className="text-white">{detail.gp.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-4">
            <motion.div 
              className="p-4 rounded-lg glass-effect border border-white/10 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm opacity-70 mb-1">CGPA</p>
              <p className="text-3xl font-bold text-blue-400">{cgpa.toFixed(2)}</p>
            </motion.div>
            
            <motion.div 
              className="p-4 rounded-lg glass-effect border border-white/10 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm opacity-70 mb-1">Total Credit Hours</p>
              <p className="text-3xl font-bold text-green-400">{totalCreditHours}</p>
            </motion.div>
            
            <motion.div 
              className="p-4 rounded-lg glass-effect border border-white/10 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm opacity-70 mb-1">Out of</p>
              <p className="text-3xl font-bold text-purple-400">4.00</p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResultsDisplay;
