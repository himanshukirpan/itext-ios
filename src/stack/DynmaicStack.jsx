
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


function DynamicStack({stackScreens=[]}) {
    return (
        <Stack.Navigator>
            {stackScreens.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={{title: screen.title}}
                />
            ))}
        </Stack.Navigator>
    );
}

export default DynamicStack;