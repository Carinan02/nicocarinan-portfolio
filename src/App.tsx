/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import RadialOrbitalTimelineDemo from "./components/radial-orbital-timeline-demo";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <RadialOrbitalTimelineDemo />
      <Analytics />
    </main>
  );
}
