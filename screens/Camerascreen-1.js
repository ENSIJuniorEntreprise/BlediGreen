import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
// import { useCameraPermission, useCameraDevice, Camera } from "react-native-vision-camera";
import Tflite from 'react-native-fast-tflite';

const CameraScreen1 = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef(null);
  const [isActive, setIsActive] = useState(true);
  const [photo, setPhoto] = useState(null);
  const tflite = useRef(new Tflite());

  useEffect(() => {
    // Request camera permission every time component mounts
    requestPermission();
  }, []);

  const onTakePicturePressed = async () => {
    const capturedPhoto = await cameraRef.current?.takePhoto();
    setPhoto(capturedPhoto);

    tflite.current.loadModel({
      model: '../assets/best-fp16.tflite',
      labels: '../assets/Labels.txt',
      numThreads: 1,
    }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        detectObjects(capturedPhoto);
      }
    });
  };

  const detectObjects = (imagePath) => {
    const anchors = []; // Define your array of anchors here

    tflite.current.detectObjectOnImage({
      path: imagePath,
      model: 'YOLO',
      imageMean: 0.0,
      imageStd: 255.0,
      threshold: 0.3,
      numResultsPerClass: 2,
      anchors: anchors, // Pass the array directly
      blockSize: 32,
    }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        // Handle object detection results here
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device="back"
        isActive={isActive && !photo}
        photo={true}
      />

      {photo ? (
        <>
          <Image source={{ uri: photo.path }} style={StyleSheet.absoluteFill} />
          <Pressable onPress={() => setPhoto(null)} style={{ position: 'absolute', top: 50, left: 30 }}>
            <Text style={{ color: 'white' }}>Retake</Text>
          </Pressable>
        </>
      ) : (
        <Pressable onPress={onTakePicturePressed} style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}>
          <View style={{ width: 75, height: 65, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/images/camera.png')}
              style={{ width: 70, height: 70, marginBottom: 135 }}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default CameraScreen1;
