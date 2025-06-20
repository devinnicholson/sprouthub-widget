import { useEffect, useState } from "react";
import AnimatedPlant from "./AnimatedPlant";
import { useLocalStorage } from "./useLocalStorage";
import { toggleTheme, useCurrentTheme } from "./theme";

type GardenState = {
  stage: number;
  lastCommit: string;
};

export default function Embed() {
  const username = new URLSearchParams(window.location.search).get("user") || "octocat";
  const [garden, setGarden] = useLocalStorage<GardenState>("sprouthub-" + username, {
    stage: 0,
    lastCommit: ""
  });

  const theme = useCurrentTheme();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events`)
      .then(res => res.json())
      .then(data => {
        const commitEvents = data.filter((e: any) => e.type === "PushEvent");
        if (commitEvents.length > 0) {
          const count = commitEvents.length;
          const stage = Math.min(4, Math.floor(count / 5));
          const latest = commitEvents[0].created_at;
          setGarden((prev) => ({
            stage: Math.max(prev.stage, stage),
            lastCommit: latest
          }));
        }
      });
  }, [username]);

  return (
    <div className={`embed-container ${theme}`}>
      <AnimatedPlant stage={garden.stage} />
      <p style={{ margin: "0.5rem 0", fontSize: "0.85rem" }}>
        Last commit: {garden.lastCommit ? new Date(garden.lastCommit).toLocaleDateString() : "N/A"}
      </p>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}