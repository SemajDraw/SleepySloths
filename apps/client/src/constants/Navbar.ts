export const NAVBAR_STATES = {
  INITIAL: 'INITIAL',
  HIDDEN: 'HIDDEN',
  STUCK: 'STUCK',
};

export const NAVBAR_HEIGHTS = {
  DESKTOP: 78,
  MOBILE: 72,
};

export const SECTIONS = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'junglemap',
    title: 'JungleMap',
  },
  {
    id: 'faq',
    title: 'FAQ',
  },
];

export const getNavbarAnimationStyles = ({
  state,
  isMdDown,
}: {
  state: typeof NAVBAR_STATES[keyof typeof NAVBAR_STATES];
  isMdDown: boolean;
}) => {
  switch (state) {
    case NAVBAR_STATES.INITIAL:
      if (isMdDown) {
        return {
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0)',
        };
      }

      return {
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0)',
      };
    case NAVBAR_STATES.STUCK:
      if (isMdDown) {
        return {
          top: '0px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        };
      }

      return {
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      };
    case NAVBAR_STATES.HIDDEN:
      return {
        top: `-${NAVBAR_HEIGHTS.MOBILE}px`,
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      };

    default:
      return {};
  }
};
