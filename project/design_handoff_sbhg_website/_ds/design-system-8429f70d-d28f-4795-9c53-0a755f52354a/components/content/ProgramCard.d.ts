import * as React from 'react';

/**
 * Level-of-care card — cream surface, outlined gold icon, optional caps badge,
 * caps title, description, optional link. For the 2x2 Program Cards grid.
 *
 * @startingPoint section="Content" subtitle="Level-of-care card with gold icon + badge" viewport="360x300"
 */
export interface ProgramCardProps {
  /** Line icon node. */
  icon: React.ReactNode;
  /** Caps badge, e.g. "PHP". */
  badge?: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  linkLabel?: string;
  style?: React.CSSProperties;
}

export function ProgramCard(props: ProgramCardProps): JSX.Element;
