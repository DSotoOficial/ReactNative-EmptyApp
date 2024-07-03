import { Layout, Text } from "@ui-kitten/components"
import { MainLayout } from "../layouts/MainLayout"


export const LogoutScreen = () => {
  return (
    <MainLayout
      subtitle="Logout"
      >
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Logout Screen</Text>
        </Layout>
      </MainLayout>
  )
}
