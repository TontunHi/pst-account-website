# 03: Wire Price Estimator Error Handling & Real-time Submission Feedback

**What to build:** Handle API response statuses in the interactive price estimator form, showing distinct error alert banners when submissions fail or invalid inputs are entered, while smoothly transitioning to the confirmation screen on success.

**Blocked by:** 02: Implement Backend Lead Capture & Multi-Channel Notification API.

**Status:** closed

- [x] Add client-side validation and error state message banner in `src/components/PriceEstimator.tsx`
- [x] Handle API success vs failure responses properly
- [x] Provide graceful fallback for offline/demo scenarios
- [x] Wire with `<ContactActionButtons />` on the recap screen
