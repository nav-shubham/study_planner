# ⚖️ CA Final Study Planner

A premium, fully offline **study management web app** built for CA Final students preparing for **FR, AFM, DT, IDT, and Audit**.

---

## 🚀 Getting Started

Simply open `index.html` in your browser — no server needed!

> All data is saved automatically in your browser's **localStorage** — nothing is sent to any server.

---

## 🎯 Subjects Covered

| Code    | Full Name                     | Color  |
|---------|-------------------------------|--------|
| 🟣 FR    | Financial Reporting            | Purple |
| 🔵 AFM   | Advanced Financial Management  | Cyan   |
| 🟡 DT    | Direct Tax                     | Amber  |
| 🟢 IDT   | Indirect Tax                   | Green  |
| 🩷 Audit | Audit & Assurance              | Pink   |

---

## ✨ Features

### 🏠 Dashboard
- Animated greeting based on time of day
- 4 live stat cards — Total Hours, Topics Completed %, Day Streak 🔥, Sessions Today
- Subject progress cards — click any to filter topics
- Quick view of recent sessions and revisions

### 📅 Study Planner
- Weekly calendar grid — navigate forward/backward through weeks
- Add sessions with subject, date, duration, topic, and type (Study / Revision / Practice / Mock)
- Sessions appear as color-coded chips on the calendar
- Full scrollable list of all sessions with delete option

### 📋 Topic Tracker
- Pre-loaded syllabus — 45 FR · 20 AFM · 25 DT · 25 IDT · 25 Audit topics (140 total)
- Each topic tagged as ⭐ Important / 🔶 High / 🔹 Medium priority
- Checkbox completion — state persists across sessions
- Filter by subject; collapsible subject groups with completion counter

### ⏱️ Focus Timer
- Pomodoro (25 min), Short Break (5 min), Long Break (15 min), or Custom duration
- Animated SVG ring progress indicator
- Auto-logs a session when Pomodoro completes
- Tracks Pomodoros today and Focus time today (resets at midnight)
- Pause / Resume / Reset controls

### 🔁 Revision Log
- Log any topic revision with confidence level (🔴 Low / 🟡 Medium / 🟢 High)
- Add notes on weak areas
- Sorted by date (newest first)
- Low-confidence topics surface in Analytics for follow-up

### 📊 Analytics
- Hours by Subject — horizontal bar chart
- Session Type Distribution — canvas donut chart
- 30-day Study Heatmap — GitHub-style activity grid with tooltips
- Topic Completion Rate per subject
- ⚠️ Weak Topics — auto-curated from low-confidence revisions

---

## 🗓️ Exam Countdown
Set your target exam date in the sidebar to see a live countdown in days.

---

## 🛠️ Tech Stack

| Layer     | Technology                               |
|-----------|------------------------------------------|
| Structure | HTML5 (Semantic)                         |
| Styling   | Vanilla CSS3 (CSS Variables, Grid, Flex) |
| Logic     | Vanilla JavaScript (ES6+)                |
| Fonts     | Google Fonts — Inter + Outfit            |
| Storage   | Browser localStorage (no backend)        |
| Charts    | Custom CSS bars + HTML Canvas (no libs)  |

---

## 📁 File Structure

```
study_planner/
├── index.html   — Main app shell & HTML views
├── style.css    — Dark theme, animations, responsive layout
├── app.js       — Full app logic, state, timer, analytics
└── README.md    — This file
```

---

## 💾 Data Persistence

All data (sessions, topic completion, revisions, exam date) is stored in **browser localStorage** under the key `cafinal_state`.

- **Backup**: DevTools → Application → Local Storage → copy `cafinal_state`
- **Reset**: Delete `cafinal_state` from localStorage

---

## 📌 Study Tips

- Use the **Pomodoro Timer** for focused 25-minute deep-work blocks
- Mark Important topics first — they are pre-tagged in the tracker
- After each chapter, log a **Revision** with your confidence level
- Monitor the **Analytics heatmap** daily — consistency beats intensity
- Set your **exam date** in the sidebar to stay deadline-aware

---

> Built with love for CA Final aspirants. All the best for your exams! 🎯
