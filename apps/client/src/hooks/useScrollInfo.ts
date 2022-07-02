import { useState, useEffect, useRef, useCallback } from 'react';
import throttle from 'lodash.throttle';
import { SCROLL_DIRECTIONS } from '../constants';

export function useScrollInfo() {
  const [isBelowFirstFold, setIsBelowFirstFold] = useState(false);
  const [isLastFold, setIsLastFold] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(
    SCROLL_DIRECTIONS.INITIAL
  );
  const lastPageYOffsetRef = useRef<null | number>(null);

  const calculateScrollInfo = useCallback(
    () =>
      throttle(() => {
        const { pageYOffset, innerHeight } = window;
        const prevPageYOffset = lastPageYOffsetRef.current;

        if (pageYOffset > innerHeight && !isBelowFirstFold) {
          setIsBelowFirstFold(true);
        }

        if (pageYOffset < innerHeight && isBelowFirstFold) {
          setIsBelowFirstFold(false);
        }

        if (
          pageYOffset >
            document.documentElement.scrollHeight - innerHeight * 2 &&
          !isLastFold
        ) {
          setIsLastFold(true);
        }

        if (
          pageYOffset >
            document.documentElement.scrollHeight - innerHeight * 2 &&
          isLastFold
        ) {
          setIsLastFold(false);
        }

        if (lastPageYOffsetRef.current !== null && prevPageYOffset !== null) {
          if (
            pageYOffset < prevPageYOffset &&
            scrollDirection !== SCROLL_DIRECTIONS.UP
          ) {
            setScrollDirection(SCROLL_DIRECTIONS.UP);
          }

          if (
            pageYOffset > prevPageYOffset &&
            scrollDirection !== SCROLL_DIRECTIONS.DOWN
          ) {
            setScrollDirection(SCROLL_DIRECTIONS.DOWN);
          }
        }

        lastPageYOffsetRef.current = pageYOffset;
      }, 100),
    [isBelowFirstFold, scrollDirection]
  );

  useEffect(() => {
    lastPageYOffsetRef.current = window.pageYOffset;
    window.addEventListener('scroll', calculateScrollInfo);

    // call the function in order to get the initial values even when the user
    // doesn't scroll
    calculateScrollInfo();

    return () => {
      window.removeEventListener('scroll', calculateScrollInfo);
    };
  }, [calculateScrollInfo, isBelowFirstFold]);

  return { isBelowFirstFold, scrollDirection, isLastFold };
}
