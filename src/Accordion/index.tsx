import React, { useState } from 'react';
import { Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';

import styles from './styles';
import { Feather } from '@expo/vector-icons';

import Character from '../models/character';

interface AccordionData {
    title: string;
    character: Character
}

const Accordion = (data: AccordionData) => {

    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => {
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
                    {data.character.name}
                </Text>
                <Feather name={expanded ? 'chevron-up' : 'chevron-down'}
                    size={28} color="#E02041" />
            </TouchableOpacity>

            <View style={styles.parentHr} />
            {
                expanded &&
                <View style={styles.child}>
                    <View style={styles.charAttributes}>
                        <Text style={styles.propertie}>Ano de aniversário:</Text>
                        <Text style={styles.value}>{data.character.birth_year}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Genero:</Text>
                        <Text style={styles.value}>{data.character.gender}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Altura:</Text>
                        <Text style={styles.value}>{data.character.height}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Cor do cabelo:</Text>
                        <Text style={styles.value}>{data.character.hair_color}</Text>
                    </View>
                    <View style={styles.charAttributes}>

                        <Text style={styles.propertie}>Cor da pele:</Text>
                        <Text style={styles.value}>{data.character.skin_color}</Text>
                    </View>
                </View>
            }

        </View>
    )
}

export default Accordion;
