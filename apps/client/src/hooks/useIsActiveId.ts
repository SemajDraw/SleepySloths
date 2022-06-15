import { useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useLayoutEffect } from 'react-layout-effect';
import { NAVBAR_HEIGHTS } from '../constants';

export const useActiveId = (ids: string[]): string => {
  const [intersectingSections, setIntersectingSections] = useState<Element[]>(
    []
  );
  const [currentActiveSectionId, setCurrentActiveSectionId] = useState<string>(
    ids[0]
  );
  const isBelowLg = useBreakpointValue({ base: true, lg: false });

  useLayoutEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // if the elements is in the viewport, add it to
            // the `intersectionSections`
            if (!intersectingSections.includes(entry.target)) {
              setIntersectingSections((prevIntersectingSections) => [
                ...prevIntersectingSections,
                entry.target,
              ]);
            }
          } else {
            // if the elements is NO LONGER in the viewport,
            // remove it from the `intersectionSections`
            if (intersectingSections.includes(entry.target)) {
              setIntersectingSections((prevIntersectingSections) =>
                prevIntersectingSections.filter(
                  (section) => section.id !== entry.target.id
                )
              );
            }
          }
        });
      },
      {
        rootMargin: `${-(isBelowLg
          ? NAVBAR_HEIGHTS.MOBILE
          : NAVBAR_HEIGHTS.DESKTOP + 32)}px`,
      }
    );

    elements.forEach((element) => element && observer.observe(element));

    if (intersectingSections.length) {
      const newCurrentActiveSectionId = intersectingSections
        .slice()
        .sort(
          (a, b) =>
            a.getBoundingClientRect().top - b.getBoundingClientRect().top
        )[0].id;

      if (currentActiveSectionId !== newCurrentActiveSectionId) {
        setCurrentActiveSectionId(newCurrentActiveSectionId);
      }
    }

    return () => {
      elements.forEach((element) => element && observer.unobserve(element));
    };
  }, [currentActiveSectionId, ids, intersectingSections, isBelowLg]);

  return currentActiveSectionId;
};
