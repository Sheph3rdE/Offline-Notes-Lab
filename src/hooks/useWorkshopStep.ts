import { useCallback, useEffect, useState } from "react";

export const WORKSHOP_STEPS = ["Jot", "Sort", "Draft", "Revise", "Shelve"] as const;
const TOTAL_STEPS = WORKSHOP_STEPS.length;

const STORAGE_KEY = "secret-shelf:workshop-step";

function loadStep(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const n = Number(raw);
    if (Number.isNaN(n) || n < 0 || n >= TOTAL_STEPS) return 0;
    return n;
  } catch {
    return 0;
  }
}

export function useWorkshopStep() {
  const [activeStep, setActiveStep] = useState<number>(loadStep);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(activeStep));
    } catch {
      /* ignore */
    }
  }, [activeStep]);

  const setStep = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return { activeStep, setStep, totalSteps: TOTAL_STEPS };
}
