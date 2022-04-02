import react from "react";
import {View, Text, FlatList} from 'react-native';
import { Dimensions } from "react-native-web";
import CarItem from "../CarItem/index";

import styles from './styles';

const cars = [
    {
        id:1,
        name:"Model S",
        tagline:"Starting at $69,420",
        image: require('../../assets/images/ModelS.jpeg')
    },
    {
        id:2,
        name:"Model 3",
        tagline:"Order Online for",
        taglineCTA:"Touchless Delivery",
        image: require('../../assets/images/Model3.jpeg')
    },
    {
        id:4,
        name:"Model X",
        tagline:"Order Online for",
        taglineCTA:"Touchless Delivery",
        image: require('../../assets/images/ModelX.jpeg')
    },
    {
        id:5,
        name:"Model Y",
        tagline:"Order Online for",
        taglineCTA:"Touchless Delivery",
        image: require('../../assets/images/ModelY.jpeg')
    }
    ];

const CarsList = () => {
    return (
        <View styles={styles.container}>
        <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        />
        </View> 
    )
}

export default CarsList;