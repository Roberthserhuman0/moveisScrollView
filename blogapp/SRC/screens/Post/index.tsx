//// IMPORTAÇÕES
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { ProgressBar } from "../../components/ProgressBar";
import { useState, useRef } from "react";

/// IMPORTAÇÕES 

type ScrollProps = {
    layoutMeasurement:{
        height: number;
    };
    contentOffset: {
        y: number;
    };
    contentSize: {
        height: number;
    }
}

export function Post(){
    const [percentage, setPercentage] = useState(0);

    const scrollRef = useRef<ScrollView>(null);

    const dimensions = useWindowDimensions();

    function scrollPercentage({contentSize, contentOffset, layoutMeasurement}: ScrollProps) {
        const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100)

        const value = ((layoutMeasurement.height +contentOffset.y) / contentSize.height) * 100;
        
        setPercentage(value < visibleContent ? 0 : value);
    }

    function handleScrollMoveTop(){
        scrollRef.current?.scrollTo({ 
            x: 0,
            y: 0,
            animated: true
        });
    }

    return (
        <View style={styles.container}>
            

            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                onScroll={(event) => scrollPercentage(event.nativeEvent)}
                scrollEventThrottle={16}
            >
            <Text style={styles.title}>
              Lorem ipsum
            </Text>
                <View>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                    </Text>

                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos, velit eaque excepturi consectetur corporis eligendi quis inventore at natus quae magnam nemo atque sequi ex dicta cumque possimus nulla.        
                    </Text>
                    
                    
                    
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis assumenda fugiat aliquam obcaecati, explicabo quisquam architecto vel consectetur temporibus tempora blanditiis ullam asperiores impedit quo sed magni dolorum voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis quae natus atque quaerat repellat ipsa odit aperiam, perferendis, dolores nobis aspernatur velit ducimus commodi aliquam consequuntur! Consequuntur, placeat delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est blanditiis ratione et nobis, maxime ipsam voluptate facilis nostrum, molestiae, in odio dicta corporis quasi autem. Facere maxime nam dolor.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid provident at neque doloremque cum? Possimus, quia illum! Veniam ipsa at fugit! Exercitationem fugiat pariatur eos dicta consequatur nostrum optio aspernatur?
                    </Text>
                </View>
            </ScrollView>

            <ProgressBar 
            value={percentage}
            onMoveTop={handleScrollMoveTop}
            />
        </View>
    );
}