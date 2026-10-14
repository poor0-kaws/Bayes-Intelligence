# UI component sources

The page uses the original navy blue and white theme rather than the individual libraries’ demo styles.

- **Cult UI**: `components/ui/texture-button.tsx` comes from https://www.cult-ui.com/r/texture-button.json. The inner wrapper uses a span for valid button/link markup, and `asChild` correctly forwards styling to the child link. MIT licensed: https://github.com/nolly-studio/cult-ui.
- **Skiper UI**: `components/ui/animated-link.tsx` adapts `Link000` from https://skiper-ui.com/registry/skiper40.json. Renamed for clarity; adds keyboard focus and reduced-motion treatment, and uses native anchors for reliable repeated in-page navigation.
- **Watermelon UI**: `components/ui/badge.tsx` comes from https://registry.watermelon.sh/r/badge.json. The reusable badge is retained in the component library; the final page does not render badges. MIT licensed: https://github.com/WatermelonCorp/watermellon-registry.
- **shadcn/ui**: the existing Base UI button provides the mobile navigation control.
- **Framer Motion**: section entrances and probability-curve opacity. Motion respects the operating system’s reduced-motion preference.

The diagrams are conceptual illustrations, not investment performance or forecasts.
