import Image from "next/image";
import ProfessorScreen from "./ProfessorScreen";
import ProfessorKeyboard from "./ProfessorKeyboard";

export default function ProfessorDevice() {
  return (
    <div className="w-full max-w-sm flex flex-col rounded-3xl border-[6px] border-[#F5A500] overflow-hidden shadow-2xl bg-[#7B3F00]">
      {/* 1. Screen — top */}
      <ProfessorScreen />

      {/* 2. Professor image as background, keyboard overlaid on the brown body area */}
      <div className="relative w-full h-[440px]">
        <Image
          src="/professor-face.png"
          alt="The Professor"
          fill
          sizes="384px"
          className="object-cover object-top"
          priority
        />
        {/* Keyboard floats over the brown lower portion of the professor image */}
        <div className="absolute bottom-0 left-0 right-0">
          <ProfessorKeyboard level={1} />
        </div>
      </div>
    </div>
  );
}
