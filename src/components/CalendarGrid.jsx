import { getCalendarDays, isBetween, isSame } from "../utils/dateUtils";
import DayCell from "./DayCell";

export default function CalendarGrid({ month, range, selectDay }) {
  const days = getCalendarDays(month);

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div>
      {/* Week headers */}
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {daysOfWeek.map((d) => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2">
  {days.map((day, index) =>
    day ? (
      <DayCell
        key={day.toString()}
        day={day}
        onClick={selectDay}
        isStart={isSame(day, range.start)}
        isEnd={isSame(day, range.end)}
        inRange={isBetween(day, range.start, range.end)}
      />
    ) : (
      <div key={index}></div> // ✅ empty cell
    )
  )}
</div>
    </div>
  );
}