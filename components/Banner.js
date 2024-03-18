import { Image } from 'react-native'
import React from 'react'

const index = (props) => {
    return (
        <Image
            style={[{
                width: '100%',
                height: 200,
                borderRadius: 20,
                borderColor: 'red',
                borderWidth: 5
            }, props.style]}
            source={{ uri: props.uri_img }} />
    )
}

export default index