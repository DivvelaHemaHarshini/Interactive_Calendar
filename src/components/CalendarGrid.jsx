import { motion, AnimatePresence } from "framer-motion";
import { getCalendarDays, isBetween, isSame } from "../utils/dateUtils";
import DayCell from "./DayCell";
export default function CalendarGrid({ month, range, selectDay, notesMap }) {
  const days = getCalendarDays(month);
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={month.toISOString()} // 🔥 triggers animation on month change
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3 }}
      >
        {/* WEEK HEADER */}
        <div className="grid grid-cols-7 mb-3 border-b pb-2">
          {daysOfWeek.map((d, i) => {
            const isSunday = i === 6;
            const isWeekend = i >= 5;

            return (
              <div
                key={d}
                className={`
                  text-center text-xs font-semibold py-1
                  ${
                    isSunday
                      ? "text-red-500"
                      : isWeekend
                      ? "text-blue-500"
                      : "text-gray-500"
                  }
                `}
              >
                {d}
              </div>
            );
          })}
        </div>

        {/* DAYS */}
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
              <div key={index} className="w-10 h-10" />
            )
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}