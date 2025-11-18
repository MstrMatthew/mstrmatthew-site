// ------- CONFIG: anchor + blocks -------

// Anchor: 11/17/2025 is Night 4/4 of Block A (Grind Week)
const anchorDate = new Date("2025-11-17"); // local time
const anchorDayIndex = 0; // We'll define this as "Day 0" in the 28-day cycle

// We'll define a 28-day cycle as an array of "days"
//
// Each day has:
// - label: string like "Grind Week – Tuesday"
// - block: "beast" | "grind" | "cruise" | "rebuild"
// - weekday: "Mon"..."Sun"
// - shift: "off" | "day" | "night"
// - stream: "none" | "optional-day" | "optional-night" | "full-day" | "full-night"
// - note: short description of when you'd actually go live
//
// We start the cycle on the Monday of Night 4/4 (Block A),
// which is 11/17/2025.

const cycle = [
  // Day 0–6: Block A (Grind Week)
  {
    label: "Grind Week – Monday",
    block: "grind",
    weekday: "Mon",
    shift: "night",
    stream: "optional-day",
    note: "Optional short daytime stream before Night 4/4.",
  },
  {
    label: "Grind Week – Tuesday",
    block: "grind",
    weekday: "Tue",
    shift: "off",
    stream: "full-day",
    note: "Full stream day (day or night).",
  },
  {
    label: "Grind Week – Wednesday",
    block: "grind",
    weekday: "Wed",
    shift: "off",
    stream: "full-day",
    note: "Full stream day (day or night).",
  },
  {
    label: "Grind Week – Thursday",
    block: "grind",
    weekday: "Thu",
    shift: "off",
    stream: "full-day",
    note: "Full stream day (day or night).",
  },
  {
    label: "Grind Week – Friday",
    block: "grind",
    weekday: "Fri",
    shift: "night",
    stream: "none",
    note: "No stream (night shift + kid pickup).",
  },
  {
    label: "Grind Week – Saturday",
    block: "grind",
    weekday: "Sat",
    shift: "night",
    stream: "optional-day",
    note: "Optional mid-day stream (12–3pm) before night shift.",
  },
  {
    label: "Grind Week – Sunday",
    block: "grind",
    weekday: "Sun",
    shift: "night",
    stream: "none",
    note: "No stream (night 3/4 – recovery focus).",
  },

  // Day 7–13: Block B (Rebuild Week)
  {
    label: "Rebuild Week – Monday",
    block: "rebuild",
    weekday: "Mon",
    shift: "off",
    stream: "optional-day",
    note: "Optional light stream (short check-in).",
  },
  {
    label: "Rebuild Week – Tuesday",
    block: "rebuild",
    weekday: "Tue",
    shift: "night",
    stream: "none",
    note: "No stream (shift-swap day, worst sleep).",
  },
  {
    label: "Rebuild Week – Wednesday",
    block: "rebuild",
    weekday: "Wed",
    shift: "night",
    stream: "optional-day",
    note: "Optional short daytime stream before night shift.",
  },
  {
    label: "Rebuild Week – Thursday",
    block: "rebuild",
    weekday: "Thu",
    shift: "night",
    stream: "none",
    note: "No stream (night 3/3).",
  },
  {
    label: "Rebuild Week – Friday",
    block: "rebuild",
    weekday: "Fri",
    shift: "day",
    stream: "none",
    note: "No stream (day 1/3).",
  },
  {
    label: "Rebuild Week – Saturday",
    block: "rebuild",
    weekday: "Sat",
    shift: "day",
    stream: "none",
    note: "No stream (day 2/3).",
  },
  {
    label: "Rebuild Week – Sunday",
    block: "rebuild",
    weekday: "Sun",
    shift: "day",
    stream: "none",
    note: "No stream (day 3/3).",
  },

  // Day 14–20: Block C (Cruise Week)
  {
    label: "Cruise Week – Monday",
    block: "cruise",
    weekday: "Mon",
    shift: "off",
    stream: "full-day",
    note: "Full stream day (off).",
  },
  {
    label: "Cruise Week – Tuesday",
    block: "cruise",
    weekday: "Tue",
    shift: "off",
    stream: "full-day",
    note: "Full stream day (off).",
  },
  {
    label: "Cruise Week – Wednesday",
    block: "cruise",
    weekday: "Wed",
    shift: "off",
    stream: "optional-day",
    note: "Optional short Sunday-style stream.",
  },
  {
    label: "Cruise Week – Thursday",
    block: "cruise",
    weekday: "Thu",
    shift: "day",
    stream: "full-night",
    note: "Post-shift night stream.",
  },
  {
    label: "Cruise Week – Friday",
    block: "cruise",
    weekday: "Fri",
    shift: "day",
    stream: "full-night",
    note: "Post-shift night stream.",
  },
  {
    label: "Cruise Week – Saturday",
    block: "cruise",
    weekday: "Sat",
    shift: "day",
    stream: "none",
    note: "No stream (fatigue peak).",
  },
  {
    label: "Cruise Week – Sunday",
    block: "cruise",
    weekday: "Sun",
    shift: "day",
    stream: "optional-night",
    note: "Optional night stream (pre-Beast lead-in).",
  },

  // Day 21–27: Block D (Beast Mode Week – 7 off days)
  {
    label: "Beast Mode Week – Monday",
    block: "beast",
    weekday: "Mon",
    shift: "off",
    stream: "full-day",
    note: "Beast stream (events/collabs).",
  },
  {
    label: "Beast Mode Week – Tuesday",
    block: "beast",
    weekday: "Tue",
    shift: "off",
    stream: "full-day",
    note: "Beast stream.",
  },
  {
    label: "Beast Mode Week – Wednesday",
    block: "beast",
    weekday: "Wed",
    shift: "off",
    stream: "full-day",
    note: "Beast stream.",
  },
  {
    label: "Beast Mode Week – Thursday",
    block: "beast",
    weekday: "Thu",
    shift: "off",
    stream: "full-day",
    note: "Beast stream.",
  },
  {
    label: "Beast Mode Week – Friday",
    block: "beast",
    weekday: "Fri",
    shift: "off",
    stream: "full-day",
    note: "Beast stream.",
  },
  {
    label: "Beast Mode Week – Saturday",
    block: "beast",
    weekday: "Sat",
    shift: "off",
    stream: "none",
    note: "Rest day.",
  },
  {
    label: "Beast Mode Week – Sunday",
    block: "beast",
    weekday: "Sun",
    shift: "off",
    stream: "none",
    note: "Rest day.",
  },
];

// Small helper to format dates
function formatDate(d) {
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Compute which cycle index today is
function getCycleIndexForDate(date) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((date - anchorDate) / msPerDay);
  // Anchor is index 0, so:
  const idx = ((diffDays % cycle.length) + cycle.length) % cycle.length;
  return idx;
}

// Map block to readable name
function blockToName(block) {
  switch (block) {
    case "beast":
      return "Beast Mode Week";
    case "grind":
      return "Grind Week";
    case "cruise":
      return "Cruise Week";
    case "rebuild":
      return "Rebuild Week";
    default:
      return "";
  }
}

// Map stream type to human-facing string
function streamDescription(day) {
  if (day.stream === "none") return "No stream planned.";
  if (day.stream === "full-day")
    return "Full stream day. Day or night stream, depending on schedule.";
  if (day.stream === "full-night")
    return "Post-shift night stream.";
  if (day.stream === "optional-day")
    return "Optional daytime stream window.";
  if (day.stream === "optional-night")
    return "Optional night stream.";
  return "";
}

// ----- Render "Today" card -----
function renderToday() {
  const today = new Date();
  const idx = getCycleIndexForDate(today);
  const day = cycle[idx];

  const todayDateEl = document.getElementById("today-date");
  const todayBlockEl = document.getElementById("today-block");
  const todayStreamEl = document.getElementById("today-stream-window");

  todayDateEl.textContent = formatDate(today);
  todayBlockEl.textContent = `${blockToName(day.block)} – ${day.label}`;
  todayStreamEl.textContent = `${streamDescription(day)} ${day.note}`;
}

// ----- Render rotation overview -----
function renderRotationOverview() {
  const container = document.getElementById("rotation-grid");
  container.innerHTML = "";

  // Group by block type
  const blocks = ["beast", "grind", "cruise", "rebuild"];

  blocks.forEach((blk) => {
    const blockDays = cycle.filter((d) => d.block === blk);

    const card = document.createElement("div");
    card.className = `block-card block--${blk}`;

    const label = document.createElement("div");
    label.className = "block-label";
    label.textContent = blockToName(blk);

    const title = document.createElement("div");
    title.className = "block-title";
    title.textContent = `${blockDays.length} days in this rotation`;

    const list = document.createElement("div");
    list.className = "day-list";

    blockDays.forEach((d) => {
      const line = document.createElement("div");
      const streamTag =
        d.stream === "none"
          ? "No stream"
          : d.stream.startsWith("optional")
          ? "Optional"
          : "Full";
      line.textContent = `${d.weekday}: ${streamTag} – ${d.note}`;
      list.appendChild(line);
    });

    card.appendChild(label);
    card.appendChild(title);
    card.appendChild(list);
    container.appendChild(card);
  });
}

renderToday();
renderRotationOverview();
