
import { Layout, Text } from "@ui-kitten/components"
import { MainLayout } from "../layouts/MainLayout"

export const LoginScreen = () => {
  return (
    <MainLayout
      subtitle="Login"
      >
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>LoginScreen</Text>
        </Layout>
      </MainLayout>
  )
}
