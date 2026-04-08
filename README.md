<h2>Interactive Wall Calendar</h2>

A modern, interactive wall calendar web application built using React and Vite.
Inspired by a physical wall calendar, this app combines clean UI, smooth animations, and practical features like date range selection and note-taking.

🔗 Live Demo: https://interactive-calendar-virid.vercel.app/

<h3>Features:</h3>
Monthly calendar view with Monday as first day

Navigate between months using arrow controls

Fully aligned 7-column calendar grid

Highlights:
🟢 Start Date
🔵 End Date
🔷 Selected Date Range

<h3>Notes System:</h3>

Add notes for a selected date range

Notes are stored in localStorage

Each saved note is:

Linked to a specific date range

Persisted across page reloads

<h3>Floating Tooltip (Custom UI)</h3>

Hover over a date to preview notes.

Smooth fade-in tooltip (no default browser tooltip).

Clean and minimal UX improvement.

<h3>Hero Image (Monthly Theme)</h3>
Each month displays a unique background image

Dynamic text overlay (month + year)

Styled to mimic a real wall calendar design

Hero Image (Monthly Theme)

Each month displays a unique background image

Dynamic text overlay (month + year)

Styled to mimic a real wall calendar design

Fully Responsive Design
Mobile:
Stacked layout (Image → Calendar → Notes)
Tablet/Desktop:
Calendar and Notes side-by-side
Optimized spacing, sizing, and touch interactions.

<h3>Tech Stack</h3>
React (Vite)
Tailwind CSS
date-fns (date utilities)
Framer Motion (animations)
localStorage (data persistence)

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── CalendarGrid.jsx     # Calendar layout + animation
│   ├── DayCell.jsx          # Individual day UI + tooltip
│   ├── HeroPanel.jsx        # Monthly image header
│   ├── NotesSection.jsx     # Notes input + sync
│   └── CalendarHeader.jsx   # Month navigation
│
├── hooks/
│   └── useCalendar.js       # Central state management
│
├── utils/
│   └── dateUtils.js         # Date calculations (range, grid)
│
├── App.jsx
└── main.jsx
```


Getting Started
1. Clone the Repository
git clone https://github.com/DivvelaHemaHarshini/Interactive_Calendar.git
cd interactive-calendar

2. Install Dependencies
npm install

3. Run Development Server
npm run dev

Open: http://localhost:5173

4. Build for Production
npm run build

<h3>Key Highlights</h3>

Clean separation of logic using custom hooks

Reusable and modular component architecture.

Smooth UI animations and transitions.

<h3>Real-world UX patterns:</h3>

Range selection.

Tooltips.

Visual indicators.

Fully responsive across devices.


<h3>Challenges Solved</h3>

Managing date range selection logic

Avoiding null values in calendar grid

Syncing notes with selected ranges

Implementing custom tooltip instead of default browser behavior

Ensuring smooth animations without breaking layout

Making the entire app responsive

<h3>Future Improvements</h3>

Drag-to-select date range

Dark mode 🌙

Holiday/event indicators.

Note categories (color-coded).

Backend integration for persistent storage.
