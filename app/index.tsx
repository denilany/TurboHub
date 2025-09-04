import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { SplashScreen } from "../src/components/SplashScreen";
import WelcomeScreen from "../src/components/WelcomeScreen";
import GetStartedScreen from "../src/components/GetStarted";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setShowGetStarted(true);
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

  if (showGetStarted) {
    return <GetStartedScreen />;
  }

  return null;
}
