import React from 'react';
import * as LucideIcons from 'lucide-react';

export function Ico({ name, size = 24, c: color, sw: strokeWidth = 1.6, style }) {
  const iconName = name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const Icon = LucideIcons[iconName];
  if (!Icon) return null;
  return <Icon size={size} color={color} strokeWidth={strokeWidth} style={style} />;
}
