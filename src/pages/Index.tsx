
import React from "react";
import CGPACalculator from "@/components/CGPACalculator";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      <motion.header 
        className="py-6 bg-gray-800/50 backdrop-blur-md shadow-lg border-b border-gray-700/30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CGPA Calculator by AliHassan
          </motion.h1>
        </div>
      </motion.header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="border-gray-700/50 bg-transparent shadow-xl">
            <CardContent className="p-0">
              <CGPACalculator />
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.footer 
          className="mt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>Based on AIOU GPA/CGPA Grading Scheme</p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
