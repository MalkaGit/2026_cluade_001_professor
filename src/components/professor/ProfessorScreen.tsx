/**
 * ProfessorScreen.tsx
 *
 * The LCD-style display on the Professor device.
 *
 * Screen position:
 *   Sits at the top of ProfessorDevice, above the professor image and keyboard.
 *
 * What it draws:
 *   A dark amber-bordered rectangle (like a retro calculator screen).
 *   Renders up to 4 lines of monospace yellow text.
 *   Font size shrinks automatically for long lines (level 3+ numbers).
 *
 * Used by: ProfessorDevice
 * Uses:    nothing
 */

// ── Types ──────────────────────────────────────────────────────────────────────

interface ProfessorScreenProps {
  /** Exactly 4 lines to display. Empty strings render as blank lines. */
  lines: string[];
}

// ── Font size helper ───────────────────────────────────────────────────────────

/** Picks a Tailwind text-size class based on the longest line. Exported for unit testing. */
export function getFontClass(lines: string[]): string {
  const maxLen = Math.max(...lines.map((l) => l.length));
  if (maxLen <= 12) return 'text-2xl';
  if (maxLen <= 18) return 'text-lg';
  return 'text-base';
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function ProfessorScreen({ lines }: ProfessorScreenProps) {
  const fontClass = getFontClass(lines);

  return (
    <div className="w-full bg-[#F5A500] px-4 pt-4 pb-3 font-mono">
      {/* Black frame */}
      <div className="bg-black rounded-xl p-[4px]">
        {/* Dark display area with amber border */}
        <div className="border-[2px] border-[#F5A500] rounded-lg bg-[#2D0A00] px-4 py-4 min-h-[100px] flex flex-col justify-center gap-0.5">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`text-yellow-200 ${fontClass} font-bold text-center tracking-widest min-h-[1.4em]`}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
