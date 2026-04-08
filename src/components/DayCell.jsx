export default function DayCell({
  day,
  isStart,
  isEnd,
  inRange,
  onClick,
  hasNote,
  noteText,
}) {
  const isToday =
    new Date().toDateString() === day.toDateString();

  const isWeekend =
    day.getDay() === 0 || day.getDay() === 6;

  return (
    <div className="relative group">
      <button
        onClick={() => onClick(day)}
        className={`
          w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm flex items-center justify-center text-sm
          transition-all duration-200 relative
          
          ${inRange ? "bg-blue-100 rounded-none" : "rounded-full"}
          ${isStart ? "bg-green-500 text-white rounded-full" : ""}
          ${isEnd ? "bg-blue-500 text-white rounded-full" : ""}
          ${isStart || isEnd ? "font-bold scale-105" : ""}
          ${isToday ? "border-2 border-red-400" : ""}
          ${isWeekend ? "text-blue-500" : ""}
          
          hover:bg-gray-200
        `}
      >
        {day.getDate()}

        {/* 🔵 NOTE DOT */}
        {hasNote && (
          <span className="absolute bottom-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        )}
      </button>

      {/* 🔥 FLOATING TOOLTIP */}
      {hasNote && noteText && (
        <div
          className="
            absolute bottom-full mb-2 left-1/2 -translate-x-1/2
            bg-black text-white text-xs px-2 py-1 rounded
            opacity-0 group-hover:opacity-100
            transition duration-200
            whitespace-nowrap z-20
          "
        >
          {noteText}

          {/* 🔻 Tooltip Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-black rotate-45"></div>
        </div>
      )}
    </div>
  );
}