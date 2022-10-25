import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from "../Color";

function Commute_record({ navigation }){
    const heads = ['일자', '출근', '퇴근', '확인'];
    const bodyDatas = [
        ['1', [['1', '07:00', '13:00', '7']]],
        ['2', [['1', '출근시간', '퇴근시간', '7']]],
        ['3', [['1', '출근시간', '퇴근시간', '7']]],
        ['4', [['1', '출근시간', '퇴근시간', '7']]],
        ['5', [['1', '출근시간', '퇴근시간', '7']]],
        ['6', [['1', '출근시간', '퇴근시간', '7']]],
      ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>출퇴근기록표</Text>
            </View>
            <View style={styles.minTitle}>
                <View style={{height: 50, marginRight: 10, borderLeftWidth: 2, borderColor: theme.green}}><Text></Text></View>
                    <View style={{width:280}}>
                        <Text style={{fontSize: 20 }}>10월 출근일지</Text>
                    </View>
            </View>
            <View style={styles.body}>
                <ScrollView style={styles.table}>
                    <View style={[styles.row, styles.borderStyle, { backgroundColor: theme.light_green, paddingRight: 5}]}>
                        {heads.map((head, index) => (
                        <View key={index} style={[styles.rowItem]}>
                            <Text style={[styles.rowItemText, { color: 'white' }]}>{head}</Text>
                        </View>
                        ))}
                    </View>
                    {bodyDatas.map(([storedName, values], index) => (
                        <View key={index} style={[styles.row, styles.borderStyle]}>
                            <View style={[styles.row]}>
                                <Text style={{paddingVertical: 15, paddingHorizontal: 4, height: 50, width:'10%', marginLeft: 15, marginRight: 58}}>
                                    {storedName}
                                </Text>
                                {values.map((value, index2) => (
                                <View key={index2} style={styles.row}>
                                    {value.map((text, index3) => {
                                    if (index3 === 0 || index3 === value.length) return null;
                    
                                    const style = [
                                        styles.colItem,
                                        {
                                        borderBottomColor: theme.light_green,
                                        borderBottomWidth: index2 === values.length - 1 ? 0 : 1,
                                        width:'25%',
                                        },
                                    ];
                    
                                    return index3 ? (
                                        <View style={[...style, index3 < 2]} key={index3}>
                                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.rowItemText}>
                                                {text}
                                            </Text>
                                        </View>
                                    ) : null;
                                    })}
                                </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth:1,
        borderBottomColor: '#cccccc',
    },
    headerText: {
        marginLeft: 30,
        marginTop: 40,
        fontSize: 20,
    },
    table: {
        margin: 20,
        width: '90%',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowItem: {
        alignItems: 'center',
        width: 50,
        paddingVertical: 15,
        paddingHorizontal: 4,
        height: 50,
    },
    colItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 4,
        height: 50,
    },
    rowItemText: { 
        textAlign: 'center',
    },
    borderStyle: {
        borderBottomWidth: 1,
        borderBottomColor: theme.dark_green,
    },
    minTitle: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    body: {
        backgroundColor:'#F4FAE4',
        height: '80%',
        width: '100%'
    },
});

export default Commute_record;