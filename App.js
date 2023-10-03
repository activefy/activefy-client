import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from './const/Colors';
import * as Linking from 'expo-linking';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ActivitiesScreen from './screens/ActivitiesScreen';

import { useFonts } from 'expo-font';
import MessagesScreen from './screens/MessagesScreen';
import AlertsScreen from './screens/AlertsScreen';
import ProfileScreen from './screens/ProfileScreen';
const Tab = createBottomTabNavigator();
const prefix = Linking.createURL('/');

export default function App() {

  const [fontsLoaded] = useFonts({
    'NewAmserdam-Italic': require('./assets/fonts/NewAmsterdam-Italic.ttf'),
  });

  const linking = {
    prefixes: [prefix],
  };

  return (
    <SafeAreaProvider style={{overflow: "hidden"}}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "black",
              borderTopWidth: 0,
            },
            headerStyle: {
              backgroundColor: "black",
              elevation: 0,
              
            },
            headerTitle: "",
            headerShadowVisible: false,
            headerRight: () => (
              <Pressable>
                <Ionicons name={"settings-outline"} size={28} color={COLORS.tab_button_inactive} style={{paddingRight: 15}}/>
              </Pressable>
            ),
            headerLeft: () => (
              <Pressable>
                <Text style={{
                  fontSize: 20,
                  fontStyle: "italic",
                  color: COLORS.tab_button_active,
                  paddingLeft: 15}}
                >ACTIVEFY</Text>
              </Pressable>
            )
          })}
        >

          <Tab.Screen
            name="activities"
            component={ActivitiesScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                let color = focused ? COLORS.tab_button_active : COLORS.tab_button_inactive;
                return <Ionicons name={"albums-outline"} size={28} color={color} />;
              }
            }}
          />

          <Tab.Screen
            name="messages"
            component={MessagesScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                let color = focused ? COLORS.tab_button_active : COLORS.tab_button_inactive;
                return <Ionicons name={"chatbubble-outline"} size={28} color={color} />;
              }
            }}
          />

          <Tab.Screen
            name="alerts"
            component={AlertsScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                let color = focused ? COLORS.tab_button_active : COLORS.tab_button_inactive;
                return <Ionicons name="notifications-outline" size={28} color={color} />;
              }
            }}
          />

          <Tab.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                let color = focused ? COLORS.tab_button_active : COLORS.tab_button_inactive;
                return <Ionicons name="person-outline" size={28} color={color} />;
              }
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}