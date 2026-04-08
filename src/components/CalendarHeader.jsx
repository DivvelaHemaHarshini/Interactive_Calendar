export default function CalendarHeader({ month, nextMonth, prevMonth }) {
  return (
    <div className="flex justify-between items-center p-4">
      <button onClick={prevMonth}>←</button>
      <h2 className="text-xl font-bold">
        {month.toLocaleString("default", { month: "long" })}{" "}
        {month.getFullYear()}
      </h2>
      <button onClick={nextMonth}>→</button>
    </div>
  );
}