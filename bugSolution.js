import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

// ... rest of your component

const loadCustomFont = async () => {
  try {
    await Font.loadAsync({
      'SpecialFont': require('./assets/fonts/SpecialFont.ttf'),
    });
    setCustomFontLoaded(true);
  } catch (error) {
    console.error('Error loading custom font:', error);
    // Handle the error appropriately, maybe display a fallback message
    setCustomFontLoaded(false);
  }
};

useEffect(() => {
  loadCustomFont();
}, []);

const [customFontLoaded, setCustomFontLoaded] = useState(false);

const [fontsLoaded] = useFonts({
  Inter: Inter_900Black,
});

if (!fontsLoaded || !customFontLoaded) {
  return <Text>Loading fonts...</Text>;
}

// ... render your components using the loaded fonts
// If customFontLoaded is false, then fall back to default font
<Text style={{ fontFamily: customFontLoaded ? 'SpecialFont' : 'systemFont' }}>Text with custom or fallback font</Text>