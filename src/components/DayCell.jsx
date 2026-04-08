export default function DayCell({ day, isStart, isEnd, inRange, onClick }) {
  return (
    <button
      onClick={() => onClick(day)}
      className={`
        w-10 h-10 flex items-center justify-center rounded-full text-sm
        ${isStart || isEnd ? "bg-blue-500 text-white" : ""}
        ${inRange ? "bg-blue-100" : ""}
        hover:bg-gray-200
      `}
    >
      {day.getDate()}
    </button>
  );
}