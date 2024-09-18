import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useActiveSectionContext } from '../contexts/ActiveSection';
import type { TSectionName } from '@/types/Section';

export default function useSectionView(sectionName: TSectionName = 'Home', amount = 0.75) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });
  const { setActiveTab, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveTab(sectionName);
    }
  }, [isInView, setActiveTab, timeOfLastClick, sectionName]);

  return { ref, isInView };
}
