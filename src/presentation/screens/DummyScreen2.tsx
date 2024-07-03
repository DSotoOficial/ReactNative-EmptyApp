import { Layout, Text } from "@ui-kitten/components"
import { MainLayout } from "../layouts/MainLayout"


export const DummyScreen2 = () => {
  return (
    <MainLayout
      subtitle="Dummy Screen 2"
      >
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Dummy Screen 2</Text>
        </Layout>
      </MainLayout>
  )
}
