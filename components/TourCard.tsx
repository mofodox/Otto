"use client";

import React from 'react';
import { CardComponentProps } from 'nextstepjs';

const TourCard: React.FC<CardComponentProps> = ({
    step,
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    skipTour,
    arrow,
}) => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl p-5 max-w-md min-w-[300px] text-white">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{step.title}</h2>
                {step.icon && <span className="text-2xl">{step.icon}</span>}
            </div>

            <div className="mb-4 text-base text-gray-300 leading-relaxed">
                {step.content}
            </div>

            <div className="mb-6 bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                <div
                    className="bg-yellow-400 h-full rounded-full transition-all duration-300 ease-out"
                    style={{
                        width: `${((currentStep + 1) / totalSteps) * 100}%`,
                    }}
                ></div>
            </div>

            <div className="flex justify-between items-center gap-4 text-sm">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`px-4 py-2 font-medium rounded-lg transition-colors ${currentStep === 0
                            ? 'text-zinc-600 bg-zinc-800/50 cursor-not-allowed'
                            : 'text-gray-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white cursor-pointer'
                        }`}
                >
                    Previous
                </button>

                <span className="text-gray-500 whitespace-nowrap font-medium">
                    {currentStep + 1} of {totalSteps}
                </span>

                {currentStep === totalSteps - 1 ? (
                    <button
                        onClick={nextStep}
                        className="px-4 py-2 font-bold text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-colors cursor-pointer"
                    >
                        Finish
                    </button>
                ) : (
                    <button
                        onClick={nextStep}
                        className="px-4 py-2 font-bold text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-colors cursor-pointer"
                    >
                        Next
                    </button>
                )}
            </div>

            {arrow}

            {skipTour && currentStep < totalSteps - 1 && (
                <button
                    onClick={skipTour}
                    className="mt-4 w-full py-2 text-xs font-medium text-gray-500 hover:text-gray-300 transition-colors cursor-pointer text-center"
                >
                    Skip Tour
                </button>
            )}
        </div>
    );
};

export default TourCard;
