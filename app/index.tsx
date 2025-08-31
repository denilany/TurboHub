import { router } from "expo-router";
import React, { useState } from "react";
import { SplashScreen } from "../src/components/SplashScreen";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
    // Navigate to the main app (tabs)
    router.replace("/(tabs)/home");
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  // This return should never be reached since we navigate away
  return null;
}
