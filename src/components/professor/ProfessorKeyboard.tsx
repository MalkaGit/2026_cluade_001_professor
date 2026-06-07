/**
 * ProfessorKeyboard.tsx
 *
 * The button grid on the Professor device.
 *
 * Screen position:
 *   Overlays the bottom portion of the professor image inside ProfessorDevice.
 *
 * What it draws:
 *   Row 1 (control): ON/OFF | SET | LVL<n>
 *   Rows 2–5 (numpad): 7 8 9 + / 4 5 6 - / 1 2 3 × / 0 . GO ÷
 *
 * Used by: ProfessorDevice
 * Uses:    ProfessorButton
 */

import ProfessorButton from './ProfessorButton';

// ── Types ──────────────────────────────────────────────────────────────────────

interface ProfessorKeyboardProps {
  level: number;
  onKeyPress: (key: string) => void;
}

// ── Key layout ─────────────────────────────────────────────────────────────────

const operators = ['+', '-', '×', '÷'];

const numberRows = [
  ['7', '8', '9', '+'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '×'],
  ['0', 'DEL', 'GO', '÷'],
];

const ariaLabels: Record<string, string> = {
  '×':   'multiply',
  '÷':   'divide',
  'GO':  'go',
  'DEL': 'delete',
  '+':   'plus',
  '-':   'minus',
};

function buttonVariant(key: string) {
  if (key === 'GO') return 'enter' as const;
  if (key === 'DEL') return 'control' as const;
  if (operators.includes(key)) return 'operator' as const;
  return 'number' as const;
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function ProfessorKeyboard({ level, onKeyPress }: ProfessorKeyboardProps) {
  return (
    <div className="bg-transparent px-4 pb-5 pt-3 space-y-2 flex-shrink-0">

      {/* Control row: ON/OFF, LVL */}
      <div className="grid grid-cols-2 gap-2">
        <ProfessorButton
          label="ON/OFF"
          variant="control"
          ariaLabel="on off"
          onClick={() => onKeyPress('ON/OFF')}
        />
        <ProfessorButton
          label={`LVL${level}`}
          variant="control"
          ariaLabel={`level ${level}`}
          onClick={() => onKeyPress(`LVL${level}`)}
        />
      </div>

      {/* Number pad */}
      <div className="grid grid-cols-4 gap-2">
        {numberRows.flat().map((key) => (
          <ProfessorButton
            key={key}
            label={key}
            variant={buttonVariant(key)}
            ariaLabel={ariaLabels[key]}
            onClick={() => onKeyPress(key)}
          />
        ))}
      </div>

    </div>
  );
}
