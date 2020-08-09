import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    buttonOpenModalContainer: {
        height: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d4c2ff',
        marginBottom: 20,
    },
    openModalFilter: {
        flexDirection: 'row',
    },
    openModalFilterText: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        marginLeft: 10,
        marginRight: 40
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        flex: 1,
        backgroundColor: '#8257e5',
        padding: 20,
    },
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock: {
        width: '48%'
    },
    buttonSearch: {
        marginTop: 20,
        height: 50,
        backgroundColor: '#04d361',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSearchText: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 22
    },
});

export default styles;