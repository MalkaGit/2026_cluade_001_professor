import ProfessorButton from "./ProfessorButton";

interface ProfessorKeyboardProps {
  level: number;
}

const operators = ["+", "-", "×", "÷"];

const numberRows = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "×"],
  ["0", ".", "=", "÷"],
];

const ariaLabels: Record<string, string> = {
  "×": "multiply",
  "÷": "divide",
  "=": "equals",
  "+": "plus",
  "-": "minus",
  ".": "decimal point",
};

function buttonVariant(key: string) {
  if (key === "=") return "enter" as const;
  if (operators.includes(key)) return "operator" as const;
  return "number" as const;
}

export default function ProfessorKeyboard({ level }: ProfessorKeyboardProps) {
  return (
    <div className="bg-transparent px-4 pb-5 pt-3 space-y-2 flex-shrink-0">
      {/* Control row: OFF, SET, LVL */}
      <div className="grid grid-cols-3 gap-2">
        <ProfessorButton label="OFF" variant="control" />
        <ProfessorButton label="SET" variant="control" />
        <ProfessorButton label={`LVL${level}`} variant="control" ariaLabel={`level ${level}`} />
      </div>

      {/* Number pad */}
      <div className="grid grid-cols-4 gap-2">
        {numberRows.flat().map((key) => (
          <ProfessorButton
            key={key}
            label={key}
            variant={buttonVariant(key)}
            ariaLabel={ariaLabels[key]}
          />
        ))}
      </div>
    </div>
  );
}
