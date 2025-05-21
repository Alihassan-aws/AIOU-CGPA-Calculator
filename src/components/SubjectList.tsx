
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <h3 className="text-lg font-semibold text-gradient">Enter Subject Marks</h3>
      
      <ScrollArea className="max-h-[350px] pr-2">
        <div className="space-y-4 pr-2">
          {subjects.map((subject, index) => (
            <motion.div 
              key={subject.id} 
              className="p-4 rounded-lg glass-effect border border-white/10 transition-all hover:border-white/20"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <Label htmlFor={`marks-${subject.id}`} className="text-sm opacity-80 mb-1 block">
                  Subject {index + 1} Marks (out of 100)
                </Label>
                <Input
                  id={`marks-${subject.id}`}
                  type="text"
                  inputMode="decimal"
                  value={subject.marks || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    const numValue = parseFloat(value);
                    
                    // Allow empty input or valid numbers
                    if (value === "" || (!isNaN(numValue) && numValue >= 0 && numValue <= 100)) {
                      onMarksChange(subject.id, value === "" ? 0 : numValue);
                    }
                  }}
                  className="glass-input"
                  placeholder="Enter marks (0-100)"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SubjectList;
