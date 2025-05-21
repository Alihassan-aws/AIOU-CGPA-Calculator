
import React from "react";
import CGPACalculator from "@/components/CGPACalculator";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="py-6 bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CGPA Calculator by AliHassan
          </h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="border-gray-700 bg-gray-800 shadow-xl">
          <CardContent className="p-0">
            <CGPACalculator />
          </CardContent>
        </Card>
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Based on AIOU GPA/CGPA Grading Scheme</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
