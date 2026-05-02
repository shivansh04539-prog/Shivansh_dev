import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  step: number;
  total: number;
  title: string;
  subtitle?: string;
  canNext: boolean;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
  children: ReactNode;
  accent?: "primary" | "accent";
}

export default function QuizShell({
  step, total, title, subtitle, canNext, onNext, onBack, isLast, children,
}: Props) {
  const pct = ((step + 1) / total) * 100;
  
  return (
    <div className="mx-auto w-full max-w-2xl px-4 pt-28 pb-32 sm:pb-16 text-white">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-widest text-gray-400">
          <span>Question {step + 1} of {total}</span>
          <span>{Math.round(pct)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-cyan-500"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            style={{ boxShadow: "0 0 12px rgba(6, 182, 212, 0.5)" }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-sm text-gray-400">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </motion.div>
      </AnimatePresence>

      {/* Controls (Desktop) */}
      <div className="mt-8 hidden sm:flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-400 hover:text-white transition disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <button 
          disabled={!canNext} 
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLast ? "See My Result" : "Next"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Controls (Mobile Sticky) */}
      <div className="fixed inset-x-0 bottom-0 z-30 sm:hidden">
        <div className="bg-gray-900 border-t border-white/10 px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            disabled={step === 0}
            className="rounded-full bg-white/10 px-4 py-3 text-sm disabled:opacity-30 text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button 
            disabled={!canNext} 
            onClick={onNext} 
            className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition disabled:opacity-50"
          >
            {isLast ? "See Result" : "Next"} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}