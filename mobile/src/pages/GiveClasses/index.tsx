import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateGoBack() {
        goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                style={styles.content} 
                source={giveClassesBgImage}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress	={handleNavigateGoBack}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;