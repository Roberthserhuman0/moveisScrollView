///IMPORTAÇÕES
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue,  withSpring} from "react-native-reanimated";
import { useEffect } from "react";
import { Feather } from '@expo/vector-icons';
import { Touchable } from "react-native";
///IMPORTAÇÕES
const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity)

type Props = {
    value: number;
    onMoveTop: () => void;
}

export function ProgressBar({ value, onMoveTop }: Props) {
    const widthContainer = useSharedValue(200);

    const endReached = value >= 95;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: widthContainer.value
        }
    })

    useEffect(() => {
        widthContainer.value = withSpring(endReached ? 56 : 200, {mass: 0.5});
    }, [value]);

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            {
                endReached ?
                    <TouchableOpacityAnimated
                    entering={FadeIn}
                    exiting={FadeOut}
                    onPress={onMoveTop}
                    >
                        <Feather name="arrow-up" size={24} color="#c4c4cc" />
                    </TouchableOpacityAnimated>
                    :
                    <Animated.View 
                    style={styles.progressContent}
                    entering={FadeIn}
                    exiting={FadeOut}
                    >
                        <Text style={styles.value}>
                            {value.toFixed(0)}%
                        </Text>

                        <View style={styles.tracker}>
                            <View style={[styles.progress, {width: `${value}%` }]}/>
                        </View>
                    </Animated.View>
            }
        </Animated.View>
    );
}
