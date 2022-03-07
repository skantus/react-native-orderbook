# Orderbook

### 1. Process and data flow

- Understading the concept of ***"Orderbook"***.

<p align="center">
    <img src="https://github.com/skantus/alejo-07-03-22/blob/main/sources/proccess.png" width="800"/>
</p>

### 2. Designing the sketch

- Sketch of what the components will look like.

<p align="center">
    <img src="https://github.com/skantus/alejo-07-03-22/blob/main/sources/mock.png" width="800"/>
</p>

### 3. Pixel perfect "minsed"

- Atomic design and responsive first.

<p align="center">
    <img src="https://github.com/skantus/alejo-07-03-22/blob/main/sources/atomic-iphone.png" width="800"/>
</p>

### 4. Design UX/UI

- Creating all the reusable components.
- [Landscape](https://github.com/skantus/alejo-07-03-22/blob/main/sources/landscape.png)

<p align="center">
    <img src="https://github.com/skantus/alejo-07-03-22/blob/main/sources/portrait.png" width="800"/>
</p>

### 5. Final interaction

- Customizable theme, supporting "Dark" and "Light" mode.

<p align="center">
    <img src="https://github.com/skantus/alejo-07-03-22/blob/main/sources/iphone.gif" width="400"/>
</p>

### Stack

- React Native version 0.67.3
- React version 17.0.2
- Typescript 4.4.4

### Unit Test & Utils

- jest
- @testing-library/react-native
- eslint
- prettier
- husky
- typescript-coverage-report

## How to run

- `yarn`
- `cd ios && pod install` (if you’re using Xcode with Rosseta) - or - `sudo arch -x86_64 gem install ffi` 
- `yarn start`
- `yarn ios` - or - open from Xcode.

