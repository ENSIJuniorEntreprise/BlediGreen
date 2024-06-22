import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 400,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        position: 'relative', // Needed for absolute positioning
    },
    imagecontainer: {
        position: "absolute",
        bottom: 0,
        right: 0, // Position the image to the bottom-right corner
        justifyContent: 'flex-end', // Align the image to the bottom of the container
        alignItems: 'flex-end', // Align the image to the right of the container
        overflow: "hidden",
    },
    image: {
        width: 300, // Set the width of the image
        height: 300, // Set the height of the image
        resizeMode: 'cover', // Ensure the image covers the entire space without stretching
    },
    details: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 10, // Add padding to create space between the text and the container edges
    },
    title: {
        color: "#529C4F",
        fontSize: 30, // Adjust font size as needed
        fontWeight: 'bold',
    },

    bigsection: {
        width: 350,
        height: 400,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        justifyContent: "center", // Align items at each end of the container
        alignItems: "center", // Center items vertically

    },

    littlesection: {
        flexDirection: "row",
        width: 350,
        height: 200,
        borderRadius: 15,
        justifyContent: "space-around", // Align items at each end of the container
        alignItems: "center", // Center items vertically

    },

    r: {
        justifyContent: "center", // Align items at each end of the container
        borderRadius: 15,
        width: 150, // Adjust the width of the icon
        height: 150, // Adjust the height of the icon
        alignItems: "center", // Center the icon vertically
        backgroundColor: "#529C4F",
    },

    sticker: {
        width: 100, // Adjust the width of the icon
        height: 100, // Adjust the height of the icon
        resizeMode: 'cover'
    },

    legende: {
        fontWeight: 'bold',
        fontSize: 20,
        alignContent: "center",
        marginTop: 5,

    },

    header: {
        marginBottom: 10,
        marginTop: 10,
        color: "black",
        fontSize: 20, // Adjust font size as needed
        fontWeight: 'bold',
        position: 'relative', // Needed for absolute positioning
    },

    row: {
        flexDirection: "row",
        width: 350,
        height: 70, // Adjust the height as needed
        marginTop: 10,
        borderRadius: 15,
        justifyContent: "space-between", // Align items at each end of the container
        alignItems: "center", // Center items vertically

    },
    advicecontainer: {
        justifyContent: "center", // Align items at each end of the container
        borderRadius: 15,
        width: 70, // Adjust the width of the icon
        height: 70, // Adjust the height of the icon

        flexDirection: "row", // Align icon and text horizontally
        alignItems: "center", // Center the icon vertically
        backgroundColor: "#529C4F",
    },
    icon: {
        width: 60, // Adjust the width of the icon
        height: 60, // Adjust the height of the icon
    },

    description: {
        height: 70, // Adjust the height as needed
        width: 50,
        borderRadius: 15,
        paddingLeft: 10,
        backgroundColor: '#F5F5F5',
        flex: 1, // Take up remaining space
        marginLeft: 10, // Add space between icon and text
        justifyContent: "center", // Center text vertically

    },


    advice: {
        fontSize: 14, // Adjust font size as needed
        fontWeight: "bold",
        color: "black",

    },

    page: {
        marginLeft: 20,
    },


});

export default styles;
