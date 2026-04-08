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
    notesMap,
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
{/* CONTENT */}
<div className="p-4 md:p-6">
  {/* CONTENT */}
<div className="p-4 md:p-6 flex flex-col gap-4">


  {/* 📱 MOBILE ORDER: Calendar first, Notes second */}
  {/* 💻 DESKTOP ORDER: Notes left, Calendar right */}

  <div className="flex flex-col md:flex-row gap-4">

    {/* 📝 Notes */}
    <div className="order-2 md:order-1 flex-1">
      <NotesSection
        currentNote={currentNote}
        updateNote={updateNote}
        range={range}
      />
    </div>

    {/* 📅 Calendar */}
    <div className="order-1 md:order-2 flex-1">
      <CalendarGrid
        month={month}
        range={range}
        selectDay={selectDay}
        notesMap={notesMap}
      />
    </div>

  </div>
</div>

         
        </div>
      </div>
    </div>
  );
}