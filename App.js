import React from "react";
//import { theme } from "./color";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Start from "./screens/Start";
//import Main from "./screens/Main";
import Shop_management from "./screens/Shop_management";
import Shop_update from "./screens/Shop_update";
import Shop_insert from "./screens/Shop_insert";
import Shop from "./screens/Shop";
import Shop_notice from "./screens/Shop_notice";
import Shop_notice_add from "./screens/Shop_notice_add";
import Employ_notice from "./screens/Employ_notice";
import Employ_notice_add from "./screens/Employ_notice_add";
import Myinfo_insert from "./screens/Myinfo_insert";
import Chat from "./screens/Chat";
import Chatroom from "./screens/Chatroom";
import Mypage from "./screens/Mypage";
import Myinfo_update from "./screens/Myinfo_update";
import Today from "./screens/Today";
import Employ_notice_detail from "./screens/Employ_notice_detail";
import Today_check from "./screens/Today_check";
import Staff_managments from "./screens/Staff_managments";
import Staff from "./screens/Staff";
import Schedule_managments from "./screens/Schedule_managments";
import Schedule_insert from "./screens/Schedule_insert";
import Schedule_update from "./screens/Schedule_update";
import Salary_calculator from "./screens/Salary_calculator";
import Commute_record from "./screens/Commute_record";
import Login from "./screens/Login";
import OwnerMain from "./screens/OwnerMain";
import StaffMain from "./screens/StaffMain";
import OwnerShop from "./screens/OwnerShop";
import StaffShop from "./screens/StaffShop";
import StaffShop_notice from "./screens/StaffShop_notice";
import StaffEmploy_notice from "./screens/StaffEmploy_notice";

const OwnerStack = createStackNavigator();
const StaffStack = createStackNavigator();
const OTab = createBottomTabNavigator();
const STab = createBottomTabNavigator();
const Stack = createStackNavigator();
//const MainStack = createStackNavigator();

const OwnerMainScreen = () => (
  <OwnerStack.Navigator>
    <OwnerStack.Screen name="OwnerMain" component={OwnerMain} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Shop_management" component={Shop_management} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Shop_update" component={Shop_update} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Shop_insert" component={Shop_insert} options={{ headerShown: false }} />
    <OwnerStack.Screen name="OwnerShop" component={OwnerShop} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Shop_notice" component={Shop_notice} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Shop_notice_add" component={Shop_notice_add} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Employ_notice" component={Employ_notice} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Employ_notice_add" component={Employ_notice_add} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Employ_notice_detail" component={Employ_notice_detail} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Today" component={Today} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Staff_managments" component={Staff_managments} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Staff" component={Staff} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Schedule_managments" component={Schedule_managments} options={{ headerShown: false }} />
    <OwnerStack.Screen name="Schedule_insert" component={Schedule_insert} options={{headerShown: false}}/>
    <OwnerStack.Screen name="Schedule_update" component={Schedule_update} options={{headerShown: false}}/>
    <OwnerStack.Screen name="Salary_calculator" component={Salary_calculator} options={{headerShown: false}}/>
    <OwnerStack.Screen name="Commute_record" component={Commute_record} options={{headerShown: false}}/>
  </OwnerStack.Navigator>
);
const StaffMainScreen = () => (
  <StaffStack.Navigator>
    <StaffStack.Screen name="StaffMain" component={StaffMain} options={{ headerShown: false }} />
    <StaffStack.Screen name="StaffShop" component={StaffShop} options={{ headerShown: false }} />
    <StaffStack.Screen name="StaffShop_notice" component={StaffShop_notice} options={{ headerShown: false }} />
    <StaffStack.Screen name="StaffEmploy_notice" component={StaffEmploy_notice} options={{ headerShown: false }} />
    <StaffStack.Screen name="Employ_notice_detail" component={Employ_notice_detail} options={{ headerShown: false }} />
    <StaffStack.Screen name="Today" component={Today} options={{ headerShown: false }} />
    <StaffStack.Screen name="Staff_managments" component={Staff_managments} options={{ headerShown: false }} />
    <StaffStack.Screen name="Staff" component={Staff} options={{ headerShown: false }} />
    <StaffStack.Screen name="Schedule_managments" component={Schedule_managments} options={{ headerShown: false }} />
    <StaffStack.Screen name="Schedule_insert" component={Schedule_insert} options={{headerShown: false}}/>
    <StaffStack.Screen name="Schedule_update" component={Schedule_update} options={{headerShown: false}}/>
    <StaffStack.Screen name="Salary_calculator" component={Salary_calculator} options={{headerShown: false}}/>
    <StaffStack.Screen name="Commute_record" component={Commute_record} options={{headerShown: false}}/>
  </StaffStack.Navigator>
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
    <MypageStack.Screen name="Today_check" component={Today_check} options={{ headerShown: false }} />
    <MypageStack.Screen name="Salary_calculator" component={Salary_calculator} options={{headerShown: false}}/>
    <MypageStack.Screen name="Commute_record" component={Commute_record} options={{headerShown: false}}/>
  </MypageStack.Navigator>
);
const OTabNavigator = () => (
  <OTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? require('./assets/images/icon/homec.png')
            : require('./assets/images/icon/home.png');
        } else if (route.name === '??????') {
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
    <OTab.Screen name="Home" component={OwnerMainScreen} options={{ headerShown: false }} />
    <OTab.Screen name="??????" component={ChatScreen} options={{ headerShown: false }}/>
    <OTab.Screen name="MyPage" component={MypageScreen} options={{ headerShown: false }}/>
  </OTab.Navigator>
);
const STabNavigator = () => (
  <STab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? require('./assets/images/icon/homec.png')
            : require('./assets/images/icon/home.png');
        } else if (route.name === '??????') {
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
    <STab.Screen name="Home" component={StaffMainScreen} options={{ headerShown: false }} />
    <STab.Screen name="??????" component={ChatScreen} options={{ headerShown: false }}/>
    <STab.Screen name="MyPage" component={MypageScreen} options={{ headerShown: false }}/>
  </STab.Navigator>
);
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Myinfo_insert" component={Myinfo_insert} options={{ headerShown: false }} />
        <Stack.Screen name="OTab" component={OTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="STab" component={STabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;