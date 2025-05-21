
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface SubjectListProps {
  subjects: Array<{
    id: number;
    name: string;
    marks: number;
  }>;
  onMarksChange: (id: number, value: number) => void;
}

const SubjectList: React.FC<SubjectListProps> = ({ 
  subjects, 
  onMarksChange
}) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-gray-200">Enter Subject Marks</h3>
      
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 scrollbar-hide">
        {subjects.map((subject, index) => (
          <motion.div 
            key={subject.id} 
            className="p-4 rounded-lg backdrop-blur-md bg-gray-700/40 border border-gray-600/50 transition-all hover:bg-gray-700/60"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div>
              <Label htmlFor={`marks-${subject.id}`} className="text-sm text-gray-300 mb-1 block">
                Subject {subject.id} Marks (out of 100)
              </Label>
              <Input
                id={`marks-${subject.id}`}
                type="number"
                min="0"
                max="100"
                value={subject.marks || ""}
                onChange={(e) => onMarksChange(subject.id, parseInt(e.target.value) || 0)}
                className="bg-gray-600/70 border-gray-600/50 text-white transition-all focus:ring-2 focus:ring-blue-500/50"
                placeholder="0-100"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
