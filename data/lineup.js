export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const DAY_GROUPS = {
  EVERY_DAY: [...DAYS],
  WEEKDAYS: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  WEEKENDS: ["Saturday"],
};

export const lineup = [
  {
    id: "289219-maul-shadow-lord",
    days: DAY_GROUPS.EVERY_DAY,
    mediaId: "289219-maul-shadow-lord",
    category: "WakeUp Watch",
  },

  {
    id: "daemons-of-the-shadow-realm-buzzwatch",
    days: ["Sunday"],
    mediaId: "daemons-of-the-shadow-realm",
    category: "BuzzWatch",
  },
  {
    id: "to-your-eternity-buzzwatch",
    days: ["Monday"],
    mediaId: "to-your-eternity",
    category: "BuzzWatch",
  },
  {
    id: "frieren-beyond-journeys-end-buzzwatch",
    days: ["Tuesday"],
    mediaId: "frieren-beyond-journeys-end",
    category: "BuzzWatch",
  },

  {
    id: "one-piece-buzzwatch",
    days: ["Wednesday"],
    mediaId: "one-piece",
    category: "BuzzWatch",
  },

  {
    id: "one-punch-man-buzzwatch",
    days: ["Thursday"],
    mediaId: "one-punch-man",
    category: "BuzzWatch",
  },
  {
    id: "re-zero-buzzwatch",
    days: ["Friday"],
    mediaId: "re-zero",
    category: "BuzzWatch",
  },

  {
    id: "kiff-snacks&toons",
    days: DAY_GROUPS.WEEKDAYS,
    mediaId: "kiff",
    category: "Snacks & Toons",
  },

  {
    id: "big-city-greens-mindsnack",
    days: DAY_GROUPS.WEEKDAYS,
    mediaId: "big-city-greens",
    category: "Mind Snack",
  },

  // {
  //   id: "gumball-mindsnack",
  //   days: DAY_GROUPS.WEEKDAYS,
  //   mediaId: "gumball",
  //   category: "Mind Snack",
  // },

  {
    id: "vox-watch-streak",
    days: ["Tuesday"],
    mediaId: "vox-machina",
    category: "Watch Streak",
  },
  {
    id: "orb-on-the-movements-of-the-earth-watch-streak",
    days: ["Friday"],
    mediaId: "orb-on-the-movements-of-the-earth",
    category: "Watch Streak",
  },

  {
    id: "takopis-original-sin-watch-streak",
    days: ["Wednesday"],
    mediaId: "takopis-original-sin",
    category: "Watch Streak",
  },

  {
    id: "that-time-i-got-reincarnated-as-a-slime-watch-streak",
    days: ["Thursday"],
    mediaId: "that-time-i-got-reincarnated-as-a-slime",
    category: "Watch Streak",
  },

  {
    id: "sand-land-the-series-watch-streak",
    days: ["Sunday"],
    mediaId: "sand-land-the-series",
    category: "Watch Streak",
  },
  {
    id: "blade-runner-black-lotus-watch-streak",
    days: ["Monday"],
    mediaId: "blade-runner-black-lotus",
    category: "Watch Streak",
  },

  {
    id: "gintama-weekend-watchout",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "gintama",
    category: "Weekend Watchout",
  },

  // {
  //   id: "fallout-episode-a-day",
  //   days: DAY_GROUPS.WEEKDAYS,
  //   mediaId: "fallout",
  //   category: "Episode-A-Day",
  // },

  // {
  //   id: "the-sandman-episode-a-day",
  //   days: DAY_GROUPS.WEEKDAYS,
  //   mediaId: "the-sandman",
  //   category: "Episode-A-Day",
  // },

  {
    id: "from-episode-a-day",
    days: DAY_GROUPS.WEEKDAYS,
    mediaId: "from",
    category: "Episode-A-Day",
  },

  {
    id: "pokemon-prime-show",
    days: DAY_GROUPS.WEEKDAYS,
    mediaId: "pokemon",
    category: "Prime Show",
  },

  {
    id: "batman-the-animated-series-evening-flix",
    days: ["Wednesday"],
    mediaId: "batman-the-animated-series",
    category: "Evening Flix",
  },

  {
    id: "avatar-the-last-airbender-evening-flix",
    days: ["Thursday"],
    mediaId: "avatar-the-last-airbender",
    category: "Evening Flix",
  },

  {
    id: "rick-and-morty-evening-flix",
    days: ["Friday"],
    mediaId: "rick-and-morty",
    category: "Evening Flix",
  },
  {
    id: "south-park-evening-flix",
    days: ["Sunday"],
    mediaId: "south-park",
    category: "Evening Flix",
  },
  {
    id: "futurama-evening-flix",
    days: ["Monday"],
    mediaId: "futurama",
    category: "Evening Flix",
  },
  {
    id: "family-guy-evening-flix",
    days: ["Tuesday"],
    mediaId: "family-guy",
    category: "Evening Flix",
  },
  {
    id: "baby-bears-zzztoons",
    days: ["Tuesday"],
    mediaId: "we-baby-bears",
    category: "ZzzToons",
  },

  {
    id: "summer-camp-island-zzztoons",
    days: ["Wednesday"],
    mediaId: "summer-camp-island",
    category: "ZzzToons",
  },

  {
    id: "close-enough-zzztoons",
    days: ["Thursday"],
    mediaId: "close-enough",
    category: "ZzzToons",
  },

  {
    id: "craig-of-the-creek-zzztoons",
    days: ["Saturday"],
    mediaId: "craig-of-the-creek",
    category: "ZzzToons",
  },
  {
    id: "regular-show-zzztoons",
    days: ["Sunday"],
    mediaId: "regular-show",
    category: "ZzzToons",
  },
  {
    id: "clarence-zzztoons",
    days: ["Monday"],
    mediaId: "clarence",
    category: "ZzzToons",
  },
  // {
  //   id: "love-death-and-robots-zzztoons",
  //   days: ["Friday"],
  //   mediaId: "love-death-and-robots",
  //   category: "ZzzToons",
  // },

  {
    id: "we-baby-bears-zzztoons",
    days: ["Friday"],
    mediaId: "we-baby-bears",
    category: "ZzzToons",
  },

  // Movies Lineup
  {
    id: "iron-lung-screentime-saturday",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "iron-lung",
    category: "ScreenTime Saturday",
  },

  {
    id: "1168190-the-wrecking-crew",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "1168190-the-wrecking-crew",
    category: "ScreenTime Saturday",
  },
  {
    id: "buffalo-kids-screentime-saturday",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "buffalo-kids",
    category: "ScreenTime Saturday",
  },
  {
    id: "1189423-the-sloth-lane",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "1189423-the-sloth-lane",
    category: "ScreenTime Saturday",
  },
  {
    id: "13813-defiance",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "13813-defiance",
    category: "ScreenTime Saturday",
  },
  {
    id: "397243-the-autopsy-of-jane-doe",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "397243-the-autopsy-of-jane-doe",
    category: "ScreenTime Saturday",
  },
  {
    id: "1432547-all-you-need-is-kill",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "1432547-all-you-need-is-kill",
    category: "ScreenTime Saturday",
  },
  {
    id: "1301421-the-sheep-detectives",
    days: DAY_GROUPS.WEEKENDS,
    mediaId: "1432547-all-you-need-is-kill",
    category: "ScreenTime Saturday",
  },
];
