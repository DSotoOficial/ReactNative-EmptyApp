
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Divider, Layout, Text, TopNavigation, TopNavigationAction, useTheme } from "@ui-kitten/components";
import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { MyIcon } from "../components/MyIcon";
import { PropsWithChildren } from "react";
import { MyIcon } from "../components/MyIcon";

interface Props extends PropsWithChildren {
    title?: string;
    subtitle?: string;
    style?: StyleProp<ViewStyle>;

    // rightAction?: () => void;
    // rightActionIcon?: string;

    children: React.ReactNode;
}

export const MainLayout = ({ title = 'Empty App', subtitle = '', style, children }: Props) => {

    const { top } = useSafeAreaInsets();
    const { canGoBack, goBack, dispatch } = useNavigation();
    const theme = useTheme();

    const renderBackAction = () => (
        <TopNavigationAction
            icon={<MyIcon name='arrow-back-outline' />}
            onPress={goBack}
        />
    );

    const RenderRightAction = () => {

        // if (rightAction === undefined || rightActionIcon === undefined) return null;

        return (
            <TopNavigationAction
                onPress={() => dispatch(DrawerActions.toggleDrawer)}
                icon={<MyIcon name='menu-outline'

                 />}
            />
        );
    }


    return (
        <Layout style={[{ flex: 1, paddingTop: top }, style]}>
            <TopNavigation
                title={title}
                subtitle={() => <Text style={{color: theme['color-primary-900']}}>{subtitle}</Text>}
                alignment="center"
                accessoryLeft={canGoBack() ? renderBackAction : undefined}
                accessoryRight={ () => <RenderRightAction /> }
                style={{ backgroundColor: theme['color-primary-100']}}
            />
            <Divider />
            <Layout style={[{ flex: 1, paddingTop: top, backgroundColor: theme['color-primary-600'] }, style]}>
                {children}
            </Layout>
        </Layout>
    )


}
