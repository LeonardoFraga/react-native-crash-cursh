import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({name, onRemove}: Props) {
    return (
        <View style={styles.continer}>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}