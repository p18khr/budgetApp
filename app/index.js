import { Stack, useRouter } from "expo-router";
import { View,Text, SafeAreaView, ScrollView } from "react-native";
import BudgetEntry from "../components/BudgetEntry";
import BudgetList from "../components/BudgetList";

const Home = () =>{
    const router = useRouter();

    return(
        <SafeAreaView style={{flex:1}}>
           <Stack.Screen
           options={{
            headerStyle : {backgroundColor:'grey'},
            headerShadowVisible:true,
            headerTitle:"Budget App",
            headerTitleAlign:'center'
           }}
           />
           <ScrollView showsVerticalScrollIndicator={true}>
            <View style={{flex:1}}>
             <BudgetEntry/>
             {/* <BudgetList/> */}
            </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default Home;