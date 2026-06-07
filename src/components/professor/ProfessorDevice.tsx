/**
 * ProfessorDevice.tsx
 *
 * The physical shell of the Professor device — outer frame, screen, image, keyboard.
 *
 * Screen position:
 *   Centered on the page by ProfessorGame.
 *
 * What it draws:
 *   A rounded amber-bordered device containing:
 *     1. ProfessorScreen  — top, shows the game display
 *     2. Professor image  — middle, decorative face graphic
 *     3. ProfessorKeyboard — bottom, overlaid on the image
 *
 * Used by: ProfessorGame
 * Uses:    ProfessorScreen, ProfessorKeyboard
 */

import Image from 'next/image';
import ProfessorScreen from './ProfessorScreen';
import ProfessorKeyboard from './ProfessorKeyboard';
import type { GameState } from '@/features/professor/professor.types';
import { buildScreenLines } from '@/features/professor/professor.client-engine';

// ── Types ──────────────────────────────────────────────────────────────────────

interface ProfessorDeviceProps {
  state: GameState;
  onKeyPress: (key: string) => void;
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function ProfessorDevice({ state, onKeyPress }: ProfessorDeviceProps) {
  return (
    <div className="w-full max-w-sm flex flex-col rounded-3xl border-[6px] border-[#F5A500] overflow-hidden shadow-2xl bg-[#7B3F00]">

      {/* 1. Screen — top */}
      <ProfessorScreen lines={buildScreenLines(state)} />

      {/* 2. Professor image with keyboard overlaid at the bottom */}
      <div className="relative w-full h-[440px]">
        <Image
          src="/professor-face.png"
          alt="The Professor"
          fill
          sizes="384px"
          className="object-cover object-top"
          priority
        />
        {/* Keyboard floats over the lower portion of the professor image */}
        <div className="absolute bottom-0 left-0 right-0">
          <ProfessorKeyboard level={state.level} onKeyPress={onKeyPress} />
        </div>
      </div>

    </div>
  );
}
