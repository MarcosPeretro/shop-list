import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Animated from "react-native-reanimated";



export function ExamplePanGesture() {
    const isPressed = useSharedValue(false)
    const offset = useSharedValue({
        x: 0,
        y: 0,
    });
    const start = useSharedValue({
        x: 0,
        y: 0,
    });

    const gesture = Gesture.Pan()
        .onBegin(() => {
            isPressed.value = true;
        })
        .onUpdate((e) => {
            offset.value ={
                x: e.translationX + start.value.x,
                y: e.translationY + start.value.y,
            }
        })
        .onEnd(() => {
            start.value = {
                x: offset.value.x,
                y: offset.value.y,
            }
            
        })
        .onFinalize(() => {
            isPressed.value = false
        });
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: isPressed.value ? 1.2 : 1 },
                { translateX: offset.value.x },
                { translateY: offset.value.y },
            ],
            backgroundColor: isPressed.value ? "orange" : "cyan",
        }
    });
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style= {[styles.ball, animatedStyles]}/>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    ball: {
        height: 50,
        width: 50,
        backgroundColor: "cyan",
        borderRadius: 25,
    },
})