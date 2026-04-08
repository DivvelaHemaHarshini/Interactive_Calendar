import { useState, useEffect } from "react";
import { addMonths, subMonths } from "date-fns";
import { rangeKey } from "../utils/dateUtils";

export default function useCalendar() {
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState({ start: null, end: null });

  // 🔥 store multiple notes
  const [notesMap, setNotesMap] = useState({});

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("notesMap");
    if (saved) setNotesMap(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notesMap", JSON.stringify(notesMap));
  }, [notesMap]);

  const selectDay = (day) => {
    if (!range.start || range.end) {
      setRange({ start: day, end: null });
    } else {
      if (day < range.start) {
        setRange({ start: day, end: range.start });
      } else {
        setRange({ ...range, end: day });
      }
    }
  };

  // 🔥 current key
  const key =
    range.start && range.end ? rangeKey(range.start, range.end) : null;

  const currentNote = key ? notesMap[key] || "" : "";

  const updateNote = (text) => {
    if (!key) return;
    setNotesMap((prev) => ({
      ...prev,
      [key]: text,
    }));
  };

  return {
    month,
    nextMonth: () => setMonth(addMonths(month, 1)),
    prevMonth: () => setMonth(subMonths(month, 1)),
    range,
    selectDay,
    currentNote,
    updateNote,
  };
}