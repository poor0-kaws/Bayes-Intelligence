# UI component sources

The page uses the original navy blue and white theme rather than the individual libraries’ demo styles.

- **Cult UI**: `components/ui/text-animate.tsx` adapts the staggered-word entrance from https://www.cult-ui.com/r/text-animate.json, using existing Framer Motion and respecting reduced motion. `components/ui/texture-button.tsx` comes from https://www.cult-ui.com/r/texture-button.json. The inner wrapper uses a span for valid button/link markup, and `asChild` correctly forwards styling to the child link. Retained as a reusable component; the current contact action uses the original outlined style. MIT licensed: https://github.com/nolly-studio/cult-ui.
- **Skiper UI**: `components/ui/animated-link.tsx` adapts `Link000` from https://skiper-ui.com/registry/skiper40.json. Renamed for clarity; adds keyboard focus and reduced-motion treatment, and uses native anchors for reliable repeated in-page navigation.
- **Watermelon UI**: `components/ui/separator.tsx` comes from https://registry.watermelon.sh/r/separator.json and supplies the header, section, footer, and thesis dividers. `components/ui/badge.tsx` comes from https://registry.watermelon.sh/r/badge.json. The reusable badge is retained in the component library; the final page does not render badges. MIT licensed: https://github.com/WatermelonCorp/watermellon-registry.
- **shadcn/ui**: the existing Base UI button provides the mobile navigation control.
- **Framer Motion**: headline entrances, staggered thesis entrances, the decorative point lattice, and the mobile navigation entrance/exit. Motion respects the operating system’s reduced-motion preference.
