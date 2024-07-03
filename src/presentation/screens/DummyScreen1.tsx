import { Layout, Text } from "@ui-kitten/components"
import { MainLayout } from "../layouts/MainLayout"


export const DummyScreen1 = () => {
  return (
    <MainLayout
      subtitle="Dummy Screen 1"
      >
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Dummy Screen 1</Text>
        </Layout>
      </MainLayout>
  )
}
