# Expo useFonts Hook Silent Failure with Custom Fonts

This repository demonstrates a bug where Expo's `useFonts` hook fails silently when loading a custom font with unusual characters or slight file corruption. The app builds successfully, but the custom font doesn't load.  The issue is the lack of clear error messages which makes debugging difficult.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go or a similar Expo client.
4. Observe that the custom font ('SpecialFont.ttf' in this example) is not loaded, even though no error is explicitly thrown.

## Solution

The solution involves thorough font file validation and improved error handling to provide more informative feedback. The `bugSolution.js` file provides an example of how to check for font loading errors explicitly and gracefully handle them.