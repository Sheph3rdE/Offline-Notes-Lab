import { WORKSHOP_STEPS } from "../hooks/useWorkshopStep";

interface WorkshopTrackerProps {
  activeStep: number;
  onStepClick: (step: number) => void;
}

export function WorkshopTracker({ activeStep, onStepClick }: WorkshopTrackerProps) {
  return (
    <div className="workshop">
      <div className="workshop-title">Workshop</div>
      <div className="workshop-steps">
        {WORKSHOP_STEPS.map((label, index) => {
          const state =
            index < activeStep ? "done" : index === activeStep ? "active" : "upcoming";
          return (
            <button
              key={label}
              className={`workshop-step ${state}`}
              onClick={() => onStepClick(index)}
            >
              <span className="step-number">{index + 1}</span>
              <span className="step-label">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
