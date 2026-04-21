/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FocusSession } from "../types";

const LOCAL_INSIGHTS = [
  "Focus is a muscle. Each session makes you stronger.",
  "Consistency is the key to deep work. Keep the streak alive.",
  "Your concentration peak is usually in the first 90 minutes.",
  "Short breaks are not distractions, they are recharge points.",
  "Quality over quantity. One deep hour beats four shallow ones.",
  "The hardest part is starting. You've already done that today.",
  "Hydration improves cognitive function. Have you had water today?",
  "Deep state flow achieved. Stay in the zone.",
  "Your neural patterns are stabilizing. Excellent focus window.",
  "Productivity is about being effective, not just busy.",
  "Disconnect to reconnect. Your brain needs silence to process.",
  "The focus engine is optimized. You are performing at peak level.",
  "Small daily wins lead to massive long-term results.",
  "Track your energy, not just your time."
];

export async function getFocusInsight(sessions: FocusSession[]) {
  if (sessions.length === 0) {
    return "The engine is ready. Begin your first session to start logging.";
  }

  if (sessions.length < 3) {
    return "Link established. Complete more sessions to calibrate your profile.";
  }

  // Purely deterministic local selection based on session count or random index
  const lastSession = sessions[0];
  if (lastSession && !lastSession.wasFocused) {
    return "Don't sweat the tough sessions. Recovery is part of the process.";
  }

  const randomIndex = Math.floor(Math.random() * LOCAL_INSIGHTS.length);
  return LOCAL_INSIGHTS[randomIndex];
}
