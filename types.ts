import { LucideIcon } from 'lucide-react';

export interface TabData {
  id: string;
  title: string;
  description: string;
  placeholderText: string;
  icon: LucideIcon;
}

export type TabId = 
  | 'calc'
  | 'energy'
  | 'interaction'
  | 'tcm'
  | 'numerology'
  | 'personality';