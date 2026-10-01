/**
 * OpenLUPAS Monochrome Design System
 * Brand: OpenLUPAS — "KNOW WHAT MATTERS."
 * Visual identity: STRICTLY BLACK + WHITE + GRAYSCALE.
 */

import type {
  ColorTokens,
  RadiusTokens,
  ShadowTokens,
  TransitionTokens,
  ButtonVariant,
  ButtonSize,
  FormControlSize,
} from "@/types/theme";

export const COLORS: ColorTokens = {
  background: "#000000",
  foreground: "#FFFFFF",
  surface1: "#050505",
  surface2: "#0A0A0A",
  surface3: "#111111",
  border: "#222222",
  borderSubtle: "#181818",
  borderHover: "#333333",
  borderFocus: "#444444",
  textPrimary: "#FFFFFF",
  textSecondary: "#A3A3A3",
  textMuted: "#737373",
  whiteSoft: "#F5F5F5",
} as const;

export const SPACING = {
  0: "0",
  1: "0.25rem",  // 4px
  2: "0.5rem",   // 8px
  3: "0.75rem",  // 12px
  4: "1rem",     // 16px
  5: "1.25rem",  // 20px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  10: "2.5rem",  // 40px
  12: "3rem",    // 48px
  16: "4rem",    // 64px
  20: "5rem",    // 80px
  24: "6rem",    // 96px
  32: "8rem",    // 128px
} as const;

export const RADII: RadiusTokens = {
  sm: "4px",   // Controls, inputs, buttons
  md: "8px",   // Cards, panels
  lg: "12px",  // Large containers
  xl: "16px",  // Modal surfaces
  full: "9999px",
} as const;

export const SHADOWS: ShadowTokens = {
  subtle: "0 1px 2px 0 rgba(255, 255, 255, 0.04)",
  card: "0 4px 16px 0 rgba(0, 0, 0, 0.8)",
  overlay: "0 16px 32px 0 rgba(0, 0, 0, 0.95)",
} as const;

export const TRANSITIONS: TransitionTokens = {
  fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  normal: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

/**
 * Reusable Button Foundation Classes
 */
export const BUTTON_STYLES = {
  base: "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-40 select-none",
  variants: {
    primary:
      "bg-white text-black hover:bg-[#F5F5F5] active:bg-[#E5E5E5] rounded-[4px]",
    secondary:
      "bg-[#0A0A0A] text-white border border-[#222222] hover:bg-[#111111] hover:border-[#333333] active:bg-[#181818] rounded-[4px]",
    ghost:
      "bg-transparent text-[#A3A3A3] hover:text-white hover:bg-[#111111] active:bg-[#181818] rounded-[4px]",
  } satisfies Record<ButtonVariant, string>,
  sizes: {
    sm: "h-8 px-3 text-xs tracking-normal gap-1.5",
    md: "h-10 px-4 text-sm tracking-normal gap-2",
    lg: "h-12 px-6 text-base tracking-normal gap-2.5",
  } satisfies Record<ButtonSize, string>,
} as const;

/**
 * Reusable Form Control Foundation Classes
 */
export const FORM_STYLES = {
  base: "w-full bg-[#0A0A0A] text-white border border-[#222222] rounded-[4px] placeholder-[#737373] transition-colors focus:outline-none focus:border-[#444444] focus:ring-1 focus:ring-[#444444] disabled:opacity-40 disabled:cursor-not-allowed",
  sizes: {
    sm: "h-8 px-2.5 text-xs",
    md: "h-10 px-3.5 text-sm",
    lg: "h-12 px-4 text-base",
  } satisfies Record<FormControlSize, string>,
  textarea:
    "w-full bg-[#0A0A0A] text-white border border-[#222222] rounded-[4px] p-3.5 text-sm placeholder-[#737373] transition-colors focus:outline-none focus:border-[#444444] focus:ring-1 focus:ring-[#444444] disabled:opacity-40 disabled:cursor-not-allowed resize-y min-h-[96px]",
} as const;

/**
 * Typography Hierarchy Classes
 */
export const TYPOGRAPHY_STYLES = {
  display:
    "text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.08] text-white",
  h1: "text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-[-0.025em] leading-[1.15] text-white",
  h2: "text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold tracking-[-0.02em] leading-[1.2] text-white",
  h3: "text-[clamp(1.25rem,1.8vw,1.75rem)] font-medium tracking-[-0.015em] leading-[1.25] text-white",
  body: "text-base leading-[1.65] text-[#A3A3A3]",
  bodyLead: "text-lg leading-[1.6] text-[#A3A3A3]",
  small: "text-sm leading-normal text-[#737373]",
  label: "text-xs uppercase font-medium tracking-[0.08em] text-[#737373]",
  nav: "text-sm font-medium tracking-normal text-[#A3A3A3] hover:text-white transition-colors duration-150",
} as const;
