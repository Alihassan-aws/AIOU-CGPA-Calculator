
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SubjectListProps {
  subjects: Array<{
    id: number;
    name: string;
    marks: number;
  }>;
  onMarksChange: (id: number, value: number) => void;
  onNameChange: (id: number, name: string) => void;
}

const SubjectList: React.FC<SubjectListProps> = ({ 
  subjects, 
  onMarksChange,
  onNameChange
}) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-gray-200">Enter Subject Details</h3>
      
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
        {subjects.map((subject) => (
          <div 
            key={subject.id} 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-gray-700/50 border border-gray-700"
          >
            <div className="col-span-1 md:col-span-2">
              <Label htmlFor={`subject-${subject.id}`} className="text-sm text-gray-300 mb-1 block">
                Subject Name
              </Label>
              <Input
                id={`subject-${subject.id}`}
                value={subject.name}
                onChange={(e) => onNameChange(subject.id, e.target.value)}
                className="bg-gray-600 border-gray-600 text-white"
                placeholder="Subject Name"
              />
            </div>
            <div>
              <Label htmlFor={`marks-${subject.id}`} className="text-sm text-gray-300 mb-1 block">
                Marks (out of 100)
              </Label>
              <Input
                id={`marks-${subject.id}`}
                type="number"
                min="0"
                max="100"
                value={subject.marks || ""}
                onChange={(e) => onMarksChange(subject.id, parseInt(e.target.value) || 0)}
                className="bg-gray-600 border-gray-600 text-white"
                placeholder="0-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
