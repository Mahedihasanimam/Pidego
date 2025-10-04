import tw from '@/assets/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, SafeAreaView, StatusBar, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';


const AnimatedImage = Animated.createAnimatedComponent(Image);


const SplashScreen: React.FC = () => {

  const router = useRouter();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1200 });

    scale.value = withTiming(1, { duration: 1000 });
    const timer = setTimeout(() => {
      router.replace('/onboarding/thirdOnboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, [opacity, scale, router]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />

      {/* Splash logo container */}
      <View style={tw`flex-1 justify-center items-center`}>
        <AnimatedImage
          style={[tw`w-[274px] h-[107px]`, animatedStyle]}
          source={require('@/assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

