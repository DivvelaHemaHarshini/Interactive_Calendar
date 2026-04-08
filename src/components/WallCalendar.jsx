import useCalendar from "../hooks/useCalendar";
import CalendarGrid from "./CalendarGrid";
import NotesSection from "./NotesSection";
import HeroPanel from "./HeroPanel";

export default function WallCalendar() {
  const {
    month,
    nextMonth,
    prevMonth,
    range,
    selectDay,
    currentNote,
    updateNote,
  } = useCalendar();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* ✅ HERO IMAGE AT TOP */}
        <HeroPanel month={month} />

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4">
          <button
            onClick={prevMonth}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            ←
          </button>

          <h2 className="text-xl font-bold">
            {month.toLocaleString("default", { month: "long" })}{" "}
            {month.getFullYear()}
          </h2>

          <button
            onClick={nextMonth}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            →
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[1fr_2fr] p-6 gap-4">
          <NotesSection
            currentNote={currentNote}
            updateNote={updateNote}
            range={range}
          />

          <CalendarGrid
            month={month}
            range={range}
            selectDay={selectDay}
          />
        </div>
      </div>
    </div>
  );
}