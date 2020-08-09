import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import { FontAwesome } from '@expo/vector-icons';

import background from '../../assets/images/give-classes-background.png';
import styles from './styles';
import api from '../../services/api';

function TeacherList() {
    const [modalVisible, setModalVisible] = useState(false);

    const [favorites, setFavorites] = useState<number[]>([]);
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: ITeacher) => teacher.id);
    
                setFavorites(favoritedTeachersIds);
            }
        });
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });  
        setModalVisible(!modalVisible);
        setTeachers(response.data);
    }

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
    );

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis">
                <View style={styles.buttonOpenModalContainer}>
                    <TouchableOpacity 
                        onPress={() => setModalVisible(true)}
                        style={styles.openModalFilter}
                    >
                        <FontAwesome name="filter" color="#04d361" size={17} />
                        <Text style={styles.openModalFilterText}>
                            Filtar por dia, hora e matéria
                        </Text>
                        <FontAwesome name="expand" color="#04d361" size={17} />
                    </TouchableOpacity>
                </View>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.searchForm}>
                        <ImageBackground style={styles.background} resizeMode="contain" source={background}>
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput
                                style={styles.input}
                                value={subject}
                                onChangeText={text => setSubject(text)}
                                placeholder="Qual a matéria?"
                                placeholderTextColor="#c1bccc"
                            />

                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={week_day}
                                        onChangeText={text => setWeekDay(text)}
                                        placeholder="Qual o dia?"
                                        placeholderTextColor="#c1bccc"
                                    />
                                </View>

                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                        placeholder="Qual o horário?"
                                        placeholderTextColor="#c1bccc"
                                    />
                                </View>
                            </View>

                            <TouchableOpacity 
                                onPress={handleFiltersSubmit} 
                                style={styles.buttonSearch}
                            >
                                <Text style={styles.buttonSearchText}>Buscar</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                        
                    </View>  
                </Modal>             
            </PageHeader> 
            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: ITeacher) => (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher} 
                        favorited={favorites.includes(teacher.id)}
                    />
                ))}
                
            </ScrollView>
        </View>
    )
}

export default TeacherList;