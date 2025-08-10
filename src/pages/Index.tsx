
import React from "react";
import CGPACalculator from "@/components/CGPACalculator";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col transition-colors duration-300">
      <motion.header 
        className="py-4 z-50 backdrop-blur-md bg-black/20 border-b border-white/10 shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <motion.h1 
              className="text-2xl md:text-3xl font-bold text-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AIOU CGPA Calculator
            </motion.h1>
            <motion.p
              className="text-sm opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              By Ali Hassan
            </motion.p>
          </div>
        </div>
      </motion.header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="border-white/10 bg-transparent shadow-xl">
            <CardContent className="p-0">
              <CGPACalculator />
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.footer 
          className="mt-8 text-center text-sm opacity-70"
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
