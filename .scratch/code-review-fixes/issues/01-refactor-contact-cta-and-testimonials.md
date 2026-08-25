# 01: Refactor Shared Contact CTA & Centralize Testimonials Data

**What to build:** Centralize all mock domain content (such as customer testimonials) in `src/data/content.ts` and create a reusable `<ContactActionButtons />` component to eliminate duplicated markup across components.

**Blocked by:** None (can start immediately).

**Status:** closed

- [x] Extract `TESTIMONIALS` data into `src/data/content.ts`
- [x] Create reusable `<ContactActionButtons />` component in `src/components/ContactActionButtons.tsx`
- [x] Update `Testimonials.tsx` and `PriceEstimator.tsx` to use the centralized data and component
