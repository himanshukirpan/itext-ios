import GuestStack from "./GuestStack";
import TabStack from "./TabStack";
import {NavigationContainer} from "@react-navigation/native";
import {useAuthStore} from "../store/authStore";
import PageStack from "./PageStack";

export default (() => {
    const {data} = useAuthStore();
    return <>

        <NavigationContainer>
            {
                data.login ?
                    <PageStack/> :
                    <GuestStack/>
            }
        </NavigationContainer>

    </>;
})