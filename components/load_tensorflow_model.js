import loadTensorflowModel from 'react-native-fast-tflite';

export const loadTensorModel = async () => {
  try {
    const model = await loadTensorflowModel(require('../assets/best-fp16.tflite'));
    return model;
  } catch (error) {
    console.error('Error loading TensorFlow Lite model:', error);
    return null;
  }
};

