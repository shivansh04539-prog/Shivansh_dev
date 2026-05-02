"use client"; 

import { useState } from "react";
import { Leaf, Sun, Cloud, CloudRain, CloudLightning } from "lucide-react";
import QuizShell from "./QuizShell"; 
import { quizData } from "@/lib/quizData"; 
import ResultPage from "./(Result)/ResultPredicoter"; // Make sure this path is correct!

// Helper to map string names from data to actual Lucide components
const IconMap: Record<string, React.ElementType> = {
  "leaf": Leaf,
  "sun": Sun,
  "cloud": Cloud,
  "cloud-rain": CloudRain,
  "cloud-lightning": CloudLightning,
};

export default function QuizBoard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [completed, setCompleted] = useState(false); // Tracks if quiz is done
  
  // If quiz is completed, map the answers and show the ResultPage
  if (completed) {
    // We map q1, q2, q3, q4 to the exact names your algorithm expects!
    const formattedAnswers = {
      direction: answers["q1"],
      month: answers["q2"],
      syllabus: answers["q3"],
      mind: answers["q4"],
    };

    const handleReset = () => {
      setCompleted(false);
      setCurrentStep(0);
      setAnswers({});
    };

    return <ResultPage answers={formattedAnswers} onReset={handleReset} />;
  }

  const question = quizData[currentStep];
  const totalSteps = quizData.length;
  const isLast = currentStep === totalSteps - 1;

  // Check if current question has an answer
  const currentAnswer = answers[question.id];
  const canNext = currentAnswer !== undefined;

  const handleNext = () => {
    if (isLast) {
      console.log("Quiz Complete! Answers:", answers);
      setCompleted(true); // This now triggers the if(completed) block above!
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleSelect = (value: string | number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  };

  // --- Renderers for different question types ---

  const renderSingleChoice = () => (
    <div className="flex flex-wrap justify-center gap-4">
      {(question.options as string[]).map((option) => {
        const isSelected = currentAnswer === option;
        return (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`rounded-full px-8 py-3 text-sm font-medium transition-all ${
              isSelected
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-500 ring-1 ring-cyan-500"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            } border`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  const renderGridChoice = () => (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {(question.options as string[]).map((option) => {
        const isSelected = currentAnswer === option;
        return (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`rounded-full px-4 py-3 text-sm font-medium transition-all ${
              isSelected
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-500 ring-1 ring-cyan-500"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            } border`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  const renderSlider = () => {
    const min = question.sliderConfig?.min || 0;
    const max = question.sliderConfig?.max || 100;
    const step = question.sliderConfig?.step || 1;
    const suffix = question.sliderConfig?.suffix || "";
    
    // Default to 50 if no answer yet, or use the selected answer
    const val = currentAnswer !== undefined ? (currentAnswer as number) : 50;

    // Auto-set the initial 50% value if user hasn't interacted yet
    if (currentAnswer === undefined) {
      handleSelect(50);
    }

    return (
      <div className="flex flex-col items-center w-full max-w-md mx-auto pt-6">
        <div className="text-6xl font-display font-bold text-cyan-400 mb-8">
          {val}{suffix}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={val}
          onChange={(e) => handleSelect(Number(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <div className="flex justify-between w-full mt-4 text-xs text-white/40 font-medium">
          <span>{min}%</span>
          <span>{max}%</span>
        </div>
      </div>
    );
  };

  const renderIconChoice = () => (
    <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-3">
      {(question.options as { label: string; icon: string }[]).map((option) => {
        const isSelected = currentAnswer === option.label;
        const IconComponent = IconMap[option.icon] || Leaf; 

        return (
          <button
            key={option.label}
            onClick={() => handleSelect(option.label)}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all ${
              isSelected
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-500 ring-1 ring-cyan-500"
                : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
            } border flex-1 min-w-[80px] aspect-square sm:aspect-auto sm:h-28`}
          >
            <IconComponent className="h-8 w-8 mb-3" strokeWidth={1.5} />
            <span className="text-[10px] tracking-widest font-semibold uppercase">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <QuizShell
      step={currentStep}
      total={totalSteps}
      title={question.title}
      subtitle={question.subtitle}
      canNext={canNext}
      onNext={handleNext}
      onBack={handleBack}
      isLast={isLast}
      accent="primary"
    >
      <div className="mt-6 w-full">
        {question.type === "single-choice" && renderSingleChoice()}
        {question.type === "grid-choice" && renderGridChoice()}
        {question.type === "slider" && renderSlider()}
        {question.type === "icon-choice" && renderIconChoice()}
      </div>
    </QuizShell>
  );
}