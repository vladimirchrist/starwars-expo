import React, { useState } from 'react';
import { Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Character from '../../models/character';
import styles from './styles';

interface CharacterData {
    name: string;
    character: Character
}

const CharacterScreen = (data: CharacterData) => {

    const [expanded, setExpanded] = useState(false);
    function toggleExpand() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.row}
                onPress={() => toggleExpand()}
            >
                <Text style={styles.title}>
                    {data.name}
                </Text>
                <Feather name={expanded ? 'chevron-up' : 'chevron-down'}
                    size={28} color="#E02041" />
            </TouchableOpacity>

            <View style={styles.parentHr} />
            {
                expanded &&
                <View style={styles.child}>
                    <View style={styles.charAttributes}>
                        <Text style={styles.propertie}>Birth Year:</Text>
                        <Text style={styles.value}>{data.character.birth_year}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Gender:</Text>
                        <Text style={styles.value}>{data.character.gender}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Height:</Text>
                        <Text style={styles.value}>{data.character.height}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Hair Color:</Text>
                        <Text style={styles.value}>{data.character.hair_color}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Skin Color:</Text>
                        <Text style={styles.value}>{data.character.skin_color}</Text>
                    </View>
                </View>
            }

        </View>
    )
}

export default CharacterScreen;
