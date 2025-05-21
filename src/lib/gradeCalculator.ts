
/**
 * Calculate GPA based on the AIOU GPA scheme
 * @param percentage - Percentage marks obtained
 * @returns GPA value
 */
export const calculateGPA = (percentage: number): number => {
  // Based on the AIOU GPA scheme from the provided image
  if (percentage >= 80) return 4.0;
  if (percentage >= 79) return 3.9;
  if (percentage >= 78) return 3.8;
  if (percentage >= 77) return 3.81;
  if (percentage >= 76) return 3.74;
  if (percentage >= 75) return 3.68;
  if (percentage >= 74) return 3.61;
  if (percentage >= 73) return 3.54;
  if (percentage >= 72) return 3.47;
  if (percentage >= 71) return 3.41;
  if (percentage >= 70) return 3.34;
  if (percentage >= 69) return 3.27;
  if (percentage >= 68) return 3.21;
  if (percentage >= 67) return 3.14;
  if (percentage >= 66) return 3.07;
  if (percentage >= 65) return 3.01;
  if (percentage >= 64) return 2.94;
  if (percentage >= 63) return 2.87;
  if (percentage >= 62) return 2.80;
  if (percentage >= 61) return 2.74;
  if (percentage >= 60) return 2.67;
  if (percentage >= 59) return 2.60;
  if (percentage >= 58) return 2.54;
  if (percentage >= 57) return 2.47;
  if (percentage >= 56) return 2.40;
  if (percentage >= 55) return 2.34;
  if (percentage >= 54) return 2.27;
  if (percentage >= 53) return 2.20;
  if (percentage >= 52) return 2.13;
  if (percentage >= 51) return 2.07;
  if (percentage >= 50) return 2.00;
  return 0; // Below 50% is fail
};

/**
 * Get letter grade based on percentage
 * @param percentage - Percentage marks obtained
 * @returns Letter grade
 */
export const getGrade = (percentage: number): string => {
  // Based on AIOU grading scheme
  if (percentage >= 80) return "A+";
  if (percentage >= 70) return "A";
  if (percentage >= 65) return "B";
  if (percentage >= 50) return "C";
  if (percentage >= 40) return "D";
  return "F";
};
