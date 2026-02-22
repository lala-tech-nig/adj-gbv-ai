"use client";

import React from 'react';

export default function StepIndicator({ steps = [], currentStep = 1 }) {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-10">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-colors ${index + 1 < currentStep ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' :
                index + 1 === currentStep ? 'bg-black text-white shadow-lg shadow-black/20' : 'bg-white border-2 border-zinc-200 text-zinc-400'
              }`}>
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            <span className={`text-xs uppercase tracking-widest font-black hidden sm:block ${index + 1 === currentStep ? 'text-black' : 'text-zinc-400'}`}>
              {step.name}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${index + 1 < currentStep ? 'bg-green-500' : 'bg-zinc-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
