import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWithinInterval,
  isSameDay,
  startOfWeek,
  endOfWeek
} from "date-fns";

export function getDaysInMonth(date) {
  return eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });
}

export function isBetween(day, start, end) {
  if (!start || !end) return false;
  return isWithinInterval(day, { start, end });
}

export function isSame(day1, day2) {
  return day1 && day2 && isSameDay(day1, day2);
}

export function rangeKey(start, end) {
  return `${start?.toISOString()}_${end?.toISOString()}`;
}

// ✅ NEW FUNCTION
export function getCalendarDays(date) {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 1 }); // Monday
  const end = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });

  return eachDayOfInterval({ start, end });
}