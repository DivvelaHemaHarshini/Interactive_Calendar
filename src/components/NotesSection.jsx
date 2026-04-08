export default function NotesSection({ currentNote, updateNote, range }) {
  return (
    <div className="p-4">
      <h3 className="font-semibold mb-3">Notes</h3>

      {!range.start || !range.end ? (
        <p className="text-sm text-gray-400">
          Select a date range to add notes
        </p>
      ) : (
        <>
          <textarea
  value={currentNote}
  onChange={(e) => updateNote(e.target.value)}
  className="w-full h-32 md:h-full text-sm md:text-base p-2 border rounded resize-none"
  placeholder="Write notes..."
/>

          <p className="text-xs mt-2 text-gray-500">
            {range.start.toDateString()} → {range.end.toDateString()}
          </p>
        </>
      )}
    </div>
  );
}