/**
 * ProfessorButton.tsx
 *
 * A single key on the Professor device keyboard.
 *
 * Screen position:
 *   Used by ProfessorKeyboard → which is rendered inside ProfessorDevice.
 *
 * What it draws:
 *   A rounded amber button. Shrinks slightly on press (active:scale-95).
 *   Visual style varies by variant: number, operator, enter (GO), or control.
 */

// ── Types ──────────────────────────────────────────────────────────────────────

type ButtonVariant = 'number' | 'operator' | 'control' | 'enter';

interface ProfessorButtonProps {
  label: string;
  variant?: ButtonVariant;
  ariaLabel?: string;
  onClick?: () => void;
}

// ── Styles per variant ─────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  number:   'bg-[#F5A500] hover:bg-[#F5B830] text-amber-950',
  operator: 'bg-[#F5A500] hover:bg-[#F5B830] text-amber-950',
  enter:    'bg-[#F5A500] hover:bg-[#F5B830] text-amber-950',
  control:  'bg-[#F5A500] hover:bg-[#F5B830] text-amber-950 text-xs tracking-wider uppercase',
};

// ── Component ──────────────────────────────────────────────────────────────────

export default function ProfessorButton({
  label,
  variant = 'number',
  ariaLabel,
  onClick,
}: ProfessorButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel ?? label}
      onClick={onClick}
      className={`
        ${variantClasses[variant]}
        rounded-lg py-3 px-1 font-bold text-center text-sm
        active:scale-95 transition-all duration-100 select-none
        shadow-sm
      `}
    >
      {label}
    </button>
  );
}
