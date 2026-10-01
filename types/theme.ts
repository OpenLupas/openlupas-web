/**
 * OpenLUPAS Monochrome Design System Types
 * Core Brand Rule: STRICTLY BLACK + WHITE + GRAYSCALE
 */

export interface ColorTokens {
  readonly background: string;
  readonly foreground: string;
  readonly surface1: string;
  readonly surface2: string;
  readonly surface3: string;
  readonly border: string;
  readonly borderSubtle: string;
  readonly borderHover: string;
  readonly borderFocus: string;
  readonly textPrimary: string;
  readonly textSecondary: string;
  readonly textMuted: string;
  readonly whiteSoft: string;
}

export interface RadiusTokens {
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
  readonly full: string;
}

export interface ShadowTokens {
  readonly subtle: string;
  readonly card: string;
  readonly overlay: string;
}

export interface TransitionTokens {
  readonly fast: string;
  readonly normal: string;
}

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type FormControlSize = "sm" | "md" | "lg";
