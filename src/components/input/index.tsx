import React, { forwardRef, Fragment, LegacyRef} from "react";

import { View, Text, TextInput, TextInputProps } from 'react-native';
import { style } from "./styles";

type Props = TextInputProps & {
    title?: string;
};

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
    const { title, style: customStyle, ...rest } = Props;

    return (
        <Fragment>
            {title && <Text style={style.titleInput}>{title}</Text>} 
            <View style={style.boxInput}>
                <TextInput
                    style={style.input}
                    {...rest} // Permite a passagem de todas as propriedades do TextInput 
                />
            </View>
        </Fragment>
    );
});