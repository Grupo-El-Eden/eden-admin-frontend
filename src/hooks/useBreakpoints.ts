import { useViewportSize } from "@mantine/hooks";

export const useBreakpoints = () => {
  const MOBILE = 768
  const TABLET = 1260
  const DESKTOP = 1620

  const { width, height } = useViewportSize();

  const isMobile = width <= MOBILE;
  const isTablet = width > MOBILE && width <= TABLET;
  const isDesktop = width > TABLET && width < DESKTOP;
  const isLargeDesktop = width >= DESKTOP;

  const recognizeWhichBreakpoint = (w: number) => {
    if (w <= MOBILE) return "mobile";
    if (w > MOBILE && w <= TABLET) return "tablet";
    if (w > TABLET && w < DESKTOP) return "desktop";
    if (w >= DESKTOP) return "large-desktop";
    return "unknown";
  };

  const current = recognizeWhichBreakpoint(window.innerWidth)

  return {
    width,
    height,
    MOBILE,
    TABLET,
    DESKTOP,
    current,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop
  }
}