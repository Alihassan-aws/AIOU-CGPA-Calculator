
/**
 * Calculate GPA based on the marks percentage
 * @param percentage - Percentage marks obtained
 * @returns GPA value and grade
 */
export const calculateGPA = (percentage: number): {gpa: number, grade: string} => {
  // Based on the grading scheme shown in the image
  if (percentage >= 85) return { gpa: 4.00, grade: "A+" };
  if (percentage >= 80) return { gpa: 3.70, grade: "A" };
  if (percentage >= 75) return { gpa: 3.30, grade: "B+" };
  if (percentage >= 70) return { gpa: 3.00, grade: "B" };
  if (percentage >= 65) return { gpa: 2.70, grade: "C+" };
  if (percentage >= 60) return { gpa: 2.30, grade: "C" };
  if (percentage >= 55) return { gpa: 2.00, grade: "D+" };
  if (percentage >= 50) return { gpa: 1.00, grade: "D" };
  return { gpa: 0.00, grade: "F" }; // Below 50% is fail
};

/**
 * Calculate CGPA based on subjects with credit hours and marks
 * @param subjects - Array of subject objects with credit hours and marks
 * @returns CGPA value, total credit hours, and grade details
 */
export const calculateCGPA = (
  subjects: Array<{ creditHours: number; marks: number }>
): {
  cgpa: number;
  totalCreditHours: number;
  gradeDetails: Array<{ creditHours: number; marks: number; grade: string; gp: number }>;
} => {
  let totalQualityPoints = 0;
  let totalCreditHours = 0;
  const gradeDetails: Array<{ creditHours: number; marks: number; grade: string; gp: number }> = [];

  subjects.forEach((subject) => {
    if (subject.creditHours > 0) {
      const { gpa, grade } = calculateGPA(subject.marks);
      const qualityPoints = gpa * subject.creditHours;
      
      totalQualityPoints += qualityPoints;
      totalCreditHours += subject.creditHours;
      
      gradeDetails.push({
        creditHours: subject.creditHours,
        marks: subject.marks,
        grade: grade,
        gp: gpa
      });
    }
  });

  const cgpa = totalCreditHours > 0 ? totalQualityPoints / totalCreditHours : 0;
  
  return {
    cgpa,
    totalCreditHours,
    gradeDetails
  };
};

/**
 * Get letter grade based on percentage
 * @param percentage - Percentage marks obtained
 * @returns Letter grade
 */
export const getGrade = (percentage: number): string => {
  return calculateGPA(percentage).grade;
};
