import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { SplashScreen } from "../src/components/SplashScreen";
import WelcomeScreen from "../src/components/WelcomeScreen";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        router.replace("/(tabs)/home");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  if (showSplash) {
    return <SplashScreen onFinish={() => {
      setShowSplash(false);
      setShowWelcome(true);
    }} />;
  }

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return null;
}
