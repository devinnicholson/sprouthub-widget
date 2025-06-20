import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plantStages = [
  "🌱",
  "🌿",
  "🌼",
  "🌷",
  "🌳"
];

export default function AnimatedPlant({ stage }: { stage: number }) {
  const [displayStage, setDisplayStage] = useState(stage);

  useEffect(() => {
    if (stage !== displayStage) {
      const timeout = setTimeout(() => setDisplayStage(stage), 300);
      return () => clearTimeout(timeout);
    }
  }, [stage, displayStage]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayStage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.4 }}
        style={{ fontSize: 64 }}
      >
        {plantStages[displayStage]}
      </motion.div>
    </AnimatePresence>
  );
}