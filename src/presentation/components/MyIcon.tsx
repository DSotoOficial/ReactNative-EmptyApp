
import { useTheme } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    name: string;
    color?: string;
    white?: boolean;
    size?: number;
}

export const MyIcon = ({ name, color, white = false, size = 32 }: Props) => {

const theme = useTheme();

if ( white ) {
    color = theme['color-info-100'];
} else if ( !color ) {
    color = theme['text-basic-color'];
} else {
    color = theme[color] ?? theme['text-basic-color'];
}

  return <Icon color={color} name={name} size={size} />
}


const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    }
})