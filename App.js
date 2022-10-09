import React from "react";
//import { theme } from "./color";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Start from "./screens/Start";
import Main from "./screens/Main";
import Shop_management from "./screens/Shop_management";
import Shop_update from "./screens/Shop_update";
import Shop_insert from "./screens/Shop_insert";
import Shop from "./screens/Shop";
import Shop_notice from "./screens/Shop_notice";
import Shop_notice_add from "./screens/Shop_notice_add";
import Myinfo_insert from "./screens/Myinfo_insert";
import Chat from "./screens/Chat";
import Chatroom from "./screens/Chatroom";
import Mypage from "./screens/Mypage";
import Myinfo_update from "./screens/Myinfo_update";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const MainScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
    <MainStack.Screen name="Shop_management" component={Shop_management} options={{ headerShown: false }} />
    <MainStack.Screen name="Shop_update" component={Shop_update} options={{ headerShown: false }} />
    <MainStack.Screen name="Shop_insert" component={Shop_insert} options={{ headerShown: false }} />
    <MainStack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
    <MainStack.Screen name="Shop_notice" component={Shop_notice} options={{ headerShown: false }} />
    <MainStack.Screen name="Shop_notice_add" component={Shop_notice_add} options={{ headerShown: false }} />
  </MainStack.Navigator>
);
const ChatStack = createStackNavigator();
const ChatScreen = () => (
  <ChatStack.Navigator>
    <ChatStack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
    <ChatStack.Screen name="Chatroom" component={Chatroom} options={{ headerShown: false }} />
  </ChatStack.Navigator>
);
const MypageStack = createStackNavigator();
const MypageScreen = () => (
  <MypageStack.Navigator>
    <MypageStack.Screen name="Mypage" component={Mypage} options={{ headerShown: false }} />
    <MypageStack.Screen name="Myinfo_update" component={Myinfo_update} options={{ headerShown: false }} />
  </MypageStack.Navigator>
);
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? require('./assets/images/icon/homec.png')
            : require('./assets/images/icon/home.png');
        } else if (route.name === '채팅') {
          iconName = focused
            ? require('./assets/images/icon/chatc.png')
            : require('./assets/images/icon/chat.png');
        } else if (route.name === 'MyPage') {
          iconName = focused
            ? require('./assets/images/icon/userc.png')
            : require('./assets/images/icon/user.png');
        }
        return (
          <Image source={iconName} style={{ width: 25, height: 25 }} />
        );
      },
    })}>
    <Tab.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
    <Tab.Screen name="채팅" component={ChatScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="MyPage" component={MypageScreen} options={{ headerShown: false }}/>
  </Tab.Navigator>
);
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="Myinfo_insert" component={Myinfo_insert} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;