import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Tesseract from 'tesseract.js';

const EmailScamDetector = () => {
  const [textFromImage, setTextFromImage] = useState('');

  const pickImage = () => {
    const options = {
      title: 'Select Email Screenshot',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const imageData = response.data;
        const imageUri = `data:image/jpeg;base64,${imageData}`;

        Tesseract.recognize(
          imageUri,
          'eng',
          { logger: info => console.log(info) }
        ).then(({ data: { text } }) => {
          console.log('Extracted Text:', text);
          setTextFromImage(text);
        }).catch(error => console.error(error));
      }
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImage}>
        <Text>Select Email Screenshot</Text>
      </TouchableOpacity>
      {textFromImage ? (
        <View>
          <Text>Extracted Text:</Text>
          <Text>{textFromImage}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default EmailScamDetector;
