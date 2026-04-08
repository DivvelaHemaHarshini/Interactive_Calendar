import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWithinInterval,
  isSameDay,
  getDay,
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
  const days = getDaysInMonth(date);

  let startDay = getDay(days[0]);
  startDay = startDay === 0 ? 6 : startDay - 1;

  const emptyDays = Array(startDay).fill(null);

  return [...emptyDays, ...days];
}