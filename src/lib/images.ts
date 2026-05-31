/**
 * Centralized image path constants for the portfolio.
 * All image references should import from here — never hardcode paths.
 *
 * Source files live in /public/images/ and /public/
 * Next/Image serves them optimized (WebP, resized, cached) automatically.
 */

export const IMAGES = {
  profile: {
    /** Dark coding studio — used in Hero right column */
    hero:      "/images/profile/hero-profile.png",
    /** Formal headshot against dark background — used in Resume sidebar */
    resume:    "/images/profile/resume-headshot.png",
    /** Relaxed seated portrait — used on Contact page */
    contact:   "/images/profile/contact-profile.png",
    /** Close-up portrait — used in About sidebar and Resume ProfileAvatar */
    sidebar:   "/images/profile/sidebar-headshot.jpg",
  },
  about: {
    /** Working on laptop at desk — used on About page */
    workspace: "/images/about/about-workspace.png",
  },
} as const;

/** Alt text constants — SEO-friendly, accessible */
export const ALT = {
  hero:      "Ateeq Rehman Wazir — Data Scientist and Full Stack Developer",
  resume:    "Ateeq Rehman Wazir — Professional headshot",
  contact:   "Ateeq Rehman Wazir — Available for new projects",
  sidebar:   "Ateeq Rehman Wazir",
  workspace: "Ateeq Rehman Wazir working on software development projects",
} as const;
