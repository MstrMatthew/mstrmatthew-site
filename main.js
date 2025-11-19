// ------- CONFIG: anchor + cycle -------

// Anchor: 11/17/2025 is Night 4/4 of Block A (Grind Week), local date.
const anchorDate = new Date(2025, 10, 17); // year, monthIndex (0-based), day
const anchorDayIndex = 0; // Treat this day as index 0 in the cycle

// 28-day cycle.
// Each day:
// - label: descriptive label
// - block: "beast" | "grind" | "cruise" | "rebuild"
// - weekday: "Mon"..."Sun"
// - shift: "off" | "day" | "night" (for your reference)
// - stream: "none" | "optional-day" | "optional-night" | "full-day" | "full-night"
// - note: extra note for days that aren't just a simple full stream

const cycle = [
  // Day 0–6: Block A (Grind Week)
  {
    label: "Grind Week – Monday",
    block: "grind",
    weekday: "Mon",
    shift: "night",
    stream: "optional-day",
    note: "Possible short daytime stream before Night 4 of 4.",
  },
  {
    label: "Grind Week – Tuesday",
    block: "grind",
    weekday: "Tue",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Grind Week – Wednesday",
    block: "grind",
    weekday: "Wed",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Grind Week – Thursday",
    block: "grind",
    weekday: "Thu",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Grind Week – Friday",
    block: "grind",
    weekday: "Fri",
    shift: "night",
    stream: "none",
    note: "No stream (night shift plus kid pickup day).",
  },
  {
    label: "Grind Week – Saturday",
    block: "grind",
    weekday: "Sat",
    shift: "night",
    stream: "optional-day",
    note: "Possible daytime stream (around 12–3pm) before night shift.",
  },
  {
    label: "Grind Week – Sunday",
    block: "grind",
    weekday: "Sun",
    shift: "night",
    stream: "none",
    note: "No stream (night 3 of 4 – recovery focus).",
  },

  // Day 7–13: Block B (Rebuild Week)
  {
    label: "Rebuild Week – Monday",
    block: "rebuild",
    weekday: "Mon",
    shift: "off",
    stream: "optional-day",
    note: "Possible light short stream (check-in only).",
  },
  {
    label: "Rebuild Week – Tuesday",
    block: "rebuild",
    weekday: "Tue",
    shift: "night",
    stream: "none",
    note: "No stream (shift-swap day: rough sleep).",
  },
  {
    label: "Rebuild Week – Wednesday",
    block: "rebuild",
    weekday: "Wed",
    shift: "night",
    stream: "optional-day",
    note: "Possible short daytime stream before night shift.",
  },
  {
    label: "Rebuild Week – Thursday",
    block: "rebuild",
    weekday: "Thu",
    shift: "night",
    stream: "none",
    note: "No stream (night 3 of 3).",
  },
  {
    label: "Rebuild Week – Friday",
    block: "rebuild",
    weekday: "Fri",
    shift: "day",
    stream: "none",
    note: "No stream (day 1 of 3).",
  },
  {
    label: "Rebuild Week – Saturday",
    block: "rebuild",
    weekday: "Sat",
    shift: "day",
    stream: "none",
    note: "No stream (day 2 of 3).",
  },
  {
    label: "Rebuild Week – Sunday",
    block: "rebuild",
    weekday: "Sun",
    shift: "day",
    stream: "none",
    note: "No stream (day 3 of 3).",
  },

  // Day 14–20: Block C (Cruise Week)
  {
    label: "Cruise Week – Monday",
    block: "cruise",
    weekday: "Mon",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Cruise Week – Tuesday",
    block: "cruise",
    weekday: "Tue",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Cruise Week – Wednesday",
    block: "cruise",
    weekday: "Wed",
    shift: "off",
    stream: "optional-day",
    note: "Possible shorter stream to protect energy for upcoming shifts.",
  },
  {
    label: "Cruise Week – Thursday",
    block: "cruise",
    weekday: "Thu",
    shift: "day",
    stream: "full-night",
    note: "Full stream window after work (night stream).",
  },
  {
    label: "Cruise Week – Friday",
    block: "cruise",
    weekday: "Fri",
    shift: "day",
    stream: "full-night",
    note: "Full stream window after work (night stream).",
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
    note: "Possible night stream (pre–Beast Mode lead-in).",
  },

  // Day 21–27: Block D (Beast Mode Week – 7 off days)
  {
    label: "Beast Mode Week – Monday",
    block: "beast",
    weekday: "Mon",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Beast Mode Week – Tuesday",
    block: "beast",
    weekday: "Tue",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Beast Mode Week – Wednesday",
    block: "beast",
    weekday: "Wed",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Beast Mode Week – Thursday",
    block: "beast",
    weekday: "Thu",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Beast Mode Week – Friday",
    block: "beast",
    weekday: "Fri",
    shift: "off",
    stream: "full-day",
    note: "",
  },
  {
    label: "Beast Mode Week – Saturday",
    block: "beast",
    weekday: "Sat",
    shift: "off",
    stream: "none",
    note: "Rest day (no stream).",
  },
  {
    label: "Beast Mode Week – Sunday",
    block: "beast",
    weekday: "Sun",
    shift: "off",
    stream: "none",
    note: "Rest day (no stream).",
  },
];

// ------- Helpers -------

function formatDate(d) {
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Compare by date only (ignore time of day)
function daysBetween(a, b) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const aUtc = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const bUtc = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((bUtc - aUtc) / msPerDay);
}

function getCycleIndexForDate(date) {
  const diffDays = daysBetween(anchorDate, date);
  const len = cycle.length;
  const idx = ((anchorDayIndex + diffDays) % len + len) % len;
  return idx;
}

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
function streamSummary(day) {
  switch (day.stream) {
    case "none":
      return "No stream planned today.";
    case "full-day":
      return "Planned stream day.";
    case "full-night":
      return "Planned night stream.";
    case "optional-day":
      return "Possible stream day.";
    case "optional-night":
      return "Possible night stream.";
    default:
      return "";
  }
}



function blockToShortTag(block) {
  switch (block) {
    case "beast":
      return "BEAST MODE WEEK";
    case "grind":
      return "GRIND WEEK";
    case "cruise":
      return "CRUISE WEEK";
    case "rebuild":
      return "REBUILD WEEK";
    default:
      return "CURRENT WEEK";
  }
}

function blockToBestDays(block) {
  switch (block) {
    case "beast":
      return "Best days to catch me this week: Friday through Tuesday.";
    case "grind":
      return "Best days to catch me this week: Tuesday, Wednesday, Thursday.";
    case "cruise":
      return "Best days to catch me this week: Friday, Saturday, Monday, and Tuesday.";
    case "rebuild":
      return "Best day to catch me this week: Monday.";
    default:
      return "";
  }
}

function updateHeroForBlock(block) {
  const btn = document.getElementById("hero-week-btn");
  const bestEl = document.getElementById("hero-best-days");

  if (btn) {
    btn.textContent = blockToShortTag(block);
    btn.classList.remove(
      "primary-btn--beast",
      "primary-btn--grind",
      "primary-btn--cruise",
      "primary-btn--rebuild"
    );
    btn.classList.add(`primary-btn--${block}`);
  }

  if (bestEl) {
    bestEl.textContent = blockToBestDays(block);
  }
}

// ------- Today card -------
function renderToday() {
  const today = new Date();
  const idx = getCycleIndexForDate(today);
  const day = cycle[idx];

  const todayDateEl = document.getElementById("today-date");
  const todayBlockEl = document.getElementById("today-block");
  const todayStreamEl = document.getElementById("today-stream-window");
  const todayNoteExtraEl = document.getElementById("today-note-extra");

  if (todayDateEl) todayDateEl.textContent = formatDate(today);
  if (todayBlockEl)
    todayBlockEl.textContent = `${blockToName(day.block)} – ${day.weekday}`;
  if (todayStreamEl) todayStreamEl.textContent = streamSummary(day);

  // Second line: explain what that means in plain language
  if (todayNoteExtraEl) {
    let extra = "";

    if (day.stream === "full-day") {
      if (day.block === "beast") {
        extra = "Full Beast Mode today. I will be live a lot. Do not miss it.";
      } else {
        extra = "Be looking for me all day. I will be on as much and as long as possible.";
      }
    } else if (day.stream === "full-night") {
      extra = "Post shift stream. Expected window is 8pm to 10pm, and it may go longer if I am off tomorrow.";
    } else if (day.stream === "optional-day") {
      extra = "Possible daytime stream. Window is usually 12pm to 3pm.";
    } else if (day.stream === "optional-night") {
      extra = "Possible night stream. Window is usually 8pm to 10pm.";
    } else {
      extra = day.note || "";
    }

    todayNoteExtraEl.textContent = extra;
  }

  updateHeroForBlock(day.block);

  // Toggle Beast Mode styling on the whole page
  if (typeof document !== "undefined") {
    if (day.block === "beast") {
      document.body.classList.add("beast-mode-active");
    } else {
      document.body.classList.remove("beast-mode-active");
    }
  }
}




// ------- Overview blocks (viewer-friendly) -------

const overviewBlocks = [
  {
    key: "grind",
    title: "Grind Week",
    label: "Week 1 of the rotation",
    bullets: [
      "Best days to catch me: Tuesday, Wednesday, Thursday.",
      "Possible extra streams: Saturday and Monday during the day.",
      "Overall vibe: steady, consistent week while I’m on nights.",
    ],
  },
  {
    key: "rebuild",
    title: "Rebuild Week",
    label: "Week 2 of the rotation",
    bullets: [
      "Best day to catch me will be Monday.",
      "Very light week. Most days are for sleep and recovery.",
      "If you see me go live here, it’s a bonus week, not the norm.",
    ],
  },
  {
    key: "cruise",
    title: "Cruise Week",
    label: "Week 3 of the rotation",
    bullets: [
      "Best days to catch me: Friday, Saturday, Monday, and Tuesday.",
      "Mix of off days and post-work night streams, consistent but not as wild as Beast Mode.",
      "Great for chill sessions, catching up on games, and hanging out.",
    ],
  },
  {
    key: "beast",
    title: "Beast Mode Week",
    label: "Week 4 of the rotation",
    bullets: [
      "Best days to catch me: Friday through Tuesday.",
      "This is the big content push! Events, collabs, long streams, and surprises.",
      "Expect the most activity, the most energy, and the most chaos!",
    ],
  },
];

function renderRotationOverview() {
  const container = document.getElementById("rotation-grid");
  if (!container) return;

  container.innerHTML = "";

  overviewBlocks.forEach((blk) => {
    const card = document.createElement("div");
    card.className = `block-card block--${blk.key}`;

    const label = document.createElement("div");
    label.className = "block-label";
    label.textContent = blk.label;

    const title = document.createElement("div");
    title.className = "block-title";
    title.textContent = blk.title;

    const list = document.createElement("div");
    list.className = "day-list";

    blk.bullets.forEach((b) => {
      const line = document.createElement("div");
      line.textContent = `• ${b}`;
      list.appendChild(line);
    });

    card.appendChild(label);
    card.appendChild(title);
    card.appendChild(list);
    container.appendChild(card);
  });
}

// ------- Footer year -------

function renderFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

// ------- Init -------
async function checkLiveStatus() {
  try {
    const res = await fetch("/.netlify/functions/check-twitch");
    if (!res.ok) {
      throw new Error("Bad response from live status function");
    }

    const data = await res.json();
    const pill = document.getElementById("live-indicator");
    const liveInline = document.getElementById("live-inline-note");

    const isLive = !!data.live;

    if (pill) {
      if (isLive) {
        pill.classList.add("live-active");
        pill.textContent = "Live now on Twitch";
      } else {
        pill.classList.remove("live-active");
        pill.textContent = "";
      }
    }

    if (liveInline) {
      if (isLive) {
        liveInline.textContent = "I am live right now on Twitch.";
      } else {
        liveInline.textContent = "";
      }
    }
  } catch (err) {
    console.error("Error checking live status:", err);
  }
}


checkLiveStatus();
setInterval(checkLiveStatus, 20000);

renderToday();
renderRotationOverview();
renderFooterYear();
// End of main.js
