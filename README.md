# Orderbook

### Feature Set

- ✅  Totals correctly calculated.
- ✅  Spread correctly calculated.
- ✅  Sorting of the orderbook.
- ✅ Depth graph
- ✅  Zero size levels are correctly removed from the orderbook.
- ✅  Switching between contracts works as expected.

### Design

- ✅  Design mirrors.
- ✅  Responsive orderbook orientation.
- ✅  Rerender requests are throttled.
- ✅  Rerender throttling time is variable based on device performance.

### Optimisations

- ✅  UI maintains steady 55-60 FPS with no spikes.
- ✅  Rendering performance

<p align="center">
    <img src="https://github.com/skantus/alejo-07-03-22/blob/main/sources/iphone.gif" width="400"/>
</p>

## How to run

Run on iOS:

- `yarn`
- `cd ios && pod install` (if you’re using Xcode with Rosseta) - or - `sudo arch -x86_64 gem install ffi` 
- `yarn start`
- `yarn ios` - or - open from Xcode.
