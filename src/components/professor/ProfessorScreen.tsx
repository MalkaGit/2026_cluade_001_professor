export default function ProfessorScreen() {
  return (
    <div className="w-full bg-[#F5A500] px-4 pt-4 pb-3 font-mono">
      {/* Black frame wrapping the screen */}
      <div className="bg-black rounded-xl p-[4px]">
        {/* Golden inner border + dark display */}
        <div className="border-[2px] border-[#F5A500] rounded-lg bg-[#2D0A00] px-4 py-4 min-h-[100px] flex flex-col justify-center">
          <div className="text-yellow-200 text-2xl font-bold text-center tracking-widest">
            3 + 4 = ?
          </div>
        </div>
      </div>
    </div>
  );
}
