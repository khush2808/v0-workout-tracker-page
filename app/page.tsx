'use client';

import { useState } from "react";

export default function WorkoutTracker() {
  const [notes, setNotes] = useState("");
  const [notesList, setNotesList] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">🏋️ No‑Equipment Workout Tracker</h1>

        <section>
          <h2 className="text-xl font-semibold">🦵 Legs & Glutes</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Squats – 20 reps</li>
            <li>Calf Raises – 30 reps</li>
            <li>Standing Hamstring Hinge – 2–3 × 8–10 or 20–30s holds</li>
            <li>Lying Single‑Leg Hamstring Raise – 2 × 10–12 each</li>
            <li>Glute Bridges – 3 × 15–20 (2s squeeze)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🧍 Core</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dead Bugs – 15 reps</li>
            <li>Plank – 30s → 1 min</li>
            <li>Leg Raises – 15 reps</li>
            <li>Bicycle Crunches – 15 reps</li>
            <li>Crunches – 5 slow reps</li>
            <li>Bird Dogs – 15 reps</li>
            <li>Hip Hinge Holds (office) – 30s</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">💪 Chest</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Push‑ups (wall / knee / incline / wide) – 8–15 reps</li>
            <li>Bottle Fly – 15 reps</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🧠 Shoulders</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Lateral Raises (backpack) – 12–15 reps</li>
            <li>Front Raises (bucket/backpack) – 10–12 reps</li>
            <li>Overhead Press (backpack) – 10 reps</li>
            <li>Arm Swings – as needed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🧍 Back</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bent‑Over Rows (bag/bucket) – 10–15 reps</li>
            <li>One‑Arm Rows – 10–12 reps each</li>
            <li>Shrugs – 10 reps (2s hold)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">💪 Arms</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dips (bedframe) – 6–10 reps</li>
            <li>Bicep Curls (backpack) – 20 reps</li>
            <li>Close‑Grip Pushups – 15 reps</li>
            <li>Overhead Tricep Extensions – 10 reps</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🔥 Cardio</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Walking – 8–12k steps</li>
            <li>Stair Climbing</li>
            <li>Marching in Place (office‑friendly)</li>
            <li>Jumping Jacks – light/moderate rounds</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📝 Notes</h2>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              className="flex-1 p-3 border rounded-xl"
              placeholder="Add a note…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && notes.trim()) {
                  setNotesList([...notesList, notes]);
                  setNotes("");
                }
              }}
            />
            <button
              onClick={() => {
                if (notes.trim()) {
                  setNotesList([...notesList, notes]);
                  setNotes("");
                }
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="space-y-2">
            {notesList.map((note, index) => (
              <div
                key={index}
                className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl flex justify-between items-start"
              >
                <span className="text-sm">{note}</span>
                <button
                  onClick={() => setNotesList(notesList.filter((_, i) => i !== index))}
                  className="text-xs text-red-500 hover:text-red-700 ml-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500">
          Consistency &gt; Intensity · Progress slowly · Recover well
        </footer>
      </div>
    </div>
  );
}
