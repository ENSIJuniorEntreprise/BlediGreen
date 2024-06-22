import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Advicecards.style.js'
import React from 'react'

const Advicecards = () => {
    return (
        <SafeAreaView style={styles.page} >
        <ScrollView>
            
            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                    <Image source={require('../../assets/images/image 5.png')}
                        style={styles.image} />

                </View>

                <View style={styles.details} >
                    <Text style={styles.title}>Ton guide ultime </Text>
                    <Text style={styles.title}>pour un mode de vie </Text>
                    <Text style={styles.title}>GREEN !</Text>
                </View>

            </View>

            <Text style={styles.header}>Les 3Rs </Text>

            <View style={styles.bigsection} >
                <View style={styles.littlesection} >

                    <View style={styles.r}>
                        <Image source={require('../../assets/images/Homescreen2-2.png')}
                            style={styles.sticker}
                        />
                        <View style={styles.legende}>
                            <Text style={styles.legende}>Reuse </Text>
                        </View>

                    </View>

                    <View style={styles.r}>
                        <Image source={require('../../assets/images/Homescreen3-1.png')}
                            style={styles.sticker}
                        />
                        <View style={styles.legende}>
                            <Text style={styles.legende}>Reduce </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.section1} >
                    <View style={styles.r}>
                        <Image source={require('../../assets/images/Homescreen4-1.png')}
                            style={styles.sticker}
                        />
                        <View style={styles.legende}>
                            <Text style={styles.legende}>Recycle </Text>
                        </View>
                    </View>


                </View>
            </View>
            <Text style={styles.header}>Meilleures Pratiques </Text>

            <View style={styles.row} >
                <View style={styles.advicecontainer}>
                    <Image source={require('../../assets/images/food-container.png')}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.description}>
                    <Text style={styles.advice}>Utilisez des sacs et des contenants réutilisables pour réduire les déchets plastiques à usage unique. </Text>
                </View>
            </View>


            <View style={styles.row} >
                <View style={styles.advicecontainer}>
                    <Image source={require('../../assets/images/nature (1).png')}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.description}>
                    <Text style={styles.advice}>Fermez les robinets lorsqu'ils ne sont pas utilisés et réparez les fuites pour économiser l'eau. </Text>
                </View>
            </View>


            <View style={styles.row} >
                <View style={styles.advicecontainer}>
                    <Image source={require('../../assets/images/car-sharing.png')}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.description}>
                    <Text style={styles.advice}>Partagez les trajets avec d'autres personnes pour réduire les émissions de gaz à effet de serre. </Text>
                </View>
            </View>


            <View style={styles.row} >
                <View style={styles.advicecontainer}>
                    <Image source={require('../../assets/images/tools.png')}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.description}>
                    <Text style={styles.advice}>Réparez les appareils électroniques défectueux au lieu de les jeter. </Text>
                </View>
            </View>


            <View style={styles.row} >
                <View style={styles.advicecontainer}>
                    <Image source={require('../../assets/images/produit2.0.png')}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.description}>
                    <Text style={styles.advice}>Utilisez des produits de nettoyage écologiques et naturels pour réduire l'utilisation les substances chimiques. </Text>
                </View>
            </View>





        </ScrollView>
     </SafeAreaView>   


    )
}

export default Advicecards