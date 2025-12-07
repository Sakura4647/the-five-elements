import { TabData } from './types';
import { 
  Calculator, 
  Sparkles, 
  RefreshCw, 
  Activity, 
  Hash, 
  UserCircle 
} from 'lucide-react';

export const TABS: TabData[] = [
  {
    id: 'calc',
    title: '計算你的生命靈數',
    description: '輸入您的出生年月日，探索隱藏在數字背後的生命密碼。',
    placeholderText: '之後放計算器與結果展板圖片',
    icon: Calculator
  },
  {
    id: 'energy',
    title: '看見你的五行能量',
    description: '金、木、水、火、土，分析您先天帶有的能量分佈圖。',
    placeholderText: '之後放五行能量雷達圖展板',
    icon: Sparkles
  },
  {
    id: 'interaction',
    title: '五行的相生相剋',
    description: '了解五行元素之間如何相互滋養與制衡，掌握平衡之道。',
    placeholderText: '之後放五行循環關係圖解',
    icon: RefreshCw
  },
  {
    id: 'tcm',
    title: '九大中醫體質',
    description: '從中醫角度分析您的體質類型，提供專屬的養生建議。',
    placeholderText: '之後放九大體質詳細列表展板',
    icon: Activity
  },
  {
    id: 'numerology',
    title: '九大生命靈數',
    description: '深入解析 1 到 9 號人的性格特質、優勢與人生課題。',
    placeholderText: '之後放數字含義詳解展板',
    icon: Hash
  },
  {
    id: 'personality',
    title: '五行人格介紹',
    description: '結合五行理論與人格心理學，全面剖析您的內在性格。',
    placeholderText: '之後放五行人格分析報告範例',
    icon: UserCircle
  }
];