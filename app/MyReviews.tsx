import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
    Alert,
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
const MyReviews = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [review, setReview] = useState("");
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera 
                 roll permission to upload images.`,
      );
    } else {
      // Launch the image library and get
      // the selected image
      const result = await ImagePicker.launchImageLibraryAsync();

      console.log("ImagePicker Result:", result);
      if (!result.cancelled) {
        // If an image is selected (not cancelled),
        // update the file state variable
        setFile(result?.assets[0]?.uri);
        console.log("Selected image URI:", result[0].uri);

        // Clear any previous errors
        setError(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Review:</Text>
      <TextInput
        style={styles.textInput}
        value={review}
        onChangeText={setReview}
      />

      {/* Button to choose an image */}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      {/* Conditionally render the image 
            or error message */}
      {file ? (
        // Display the selected image
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }} style={styles.image} />
        </View>
      ) : (
        // Display an error message if there's
        // an error or no image selected
        <Text style={styles.errorText}>{error}</Text>
      )}

      <Button
        title="Submit Review"
        onPress={() =>
          setTimeout(() => {
            setFile(null);
            setReview("");
            Alert.alert("Review Submitted", "Your review has been submitted.");
          }, 1000)
        }
      />
    </View>
  );
};

export default MyReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    height: 100,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
