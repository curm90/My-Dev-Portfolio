'use client';

import { createContext, useContext, useState } from 'react';
import { links } from '@/lib/data';

type TSectionName = (typeof links)[number]['name'];
type TActiveSectionContextProvider = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeTab: TSectionName;
  setActiveTab: React.Dispatch<React.SetStateAction<TSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: TActiveSectionContextProvider) {
  const [activeTab, setActiveTab] = useState<TSectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeTab, setActiveTab, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error('useActiveSection must be used within an ActiveSectionContextProvider');
  }

  return context;
}
