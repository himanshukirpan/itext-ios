import GuestStack from "./GuestStack";
import TabStack from "./TabStack";
import {NavigationContainer} from "@react-navigation/native";
import {useAuthStore} from "../store/authStore";

export default (() => {
    const {data} = useAuthStore();
    return <>

        <NavigationContainer>
            {
                data.login ?
                    <TabStack/> :
                    <GuestStack/>
            }
        </NavigationContainer>

    </>;
})