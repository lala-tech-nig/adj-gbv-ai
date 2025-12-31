"use client";

import React from 'react';

export default function StepIndicator({ steps = [], currentStep = 1 }) {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-10">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index + 1 < currentStep ? 'bg-blue-600 text-white' :
              index + 1 === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            <span className={`text-sm font-medium ${index + 1 === currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
              {step.name}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-px bg-gray-200 mx-4" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
