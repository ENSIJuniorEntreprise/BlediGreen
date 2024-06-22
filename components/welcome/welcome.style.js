import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcometext: {
        fontFamily: "bold",
        fontSize: 40,
        marginTop: 0,
        color: "#529C4F",
        marginLeft: 0,

    },
    /*searchcontainer: {
        marginTop: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: 15,
        marginvertical: 20,
        width: 300,
        height: 30,



    },
    */
    searchcontainer: {
        width: 350,
        height: 40,
        marginTop: 50,
        marginLeft: 10,
        borderRadius: 15,
        flexDirection: "row",
        backgroundColor: '#F5F5F5',

    },

    searchicon: {
        marginHorizontal: 10,
        marginTop: 5,
        color: "gray",
    },

    searchwrapper: {
        flex: 1,
        marginTop: 5,
        marginright: 10,
        borderRadius: 20,
        backgroundColor: "#F5F5F5",
    },

    searchinput: {

        fontFamily: 12,
        width: "100%",
        height: "100%",
        paddinghorizontal: 40,

    },
    page: {
        marginLeft: 20,
    },

})
export default styles