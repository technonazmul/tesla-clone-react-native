import react from "react";
import {View,Text,Pressable} from 'react-native';
import styles from "./styles";

const StyledButton = (props) => {
    const type = props.type;
    const backgroundColor = type === 'primary'?'black':'white';
    const textColor = type === 'primary'?'white':'black';
    const onPress = props.onPress;

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button,{backgroundColor:backgroundColor}]} onPress={() => onPress()} >
                <Text style={[styles.text, {color: textColor}]}>{props.content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;