import "../styles/globals.css"
import { Layout } from "../components"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"

//Context is used to share data that can be considered “global” for a tree of React components,
//Toaster is used to display toast notifications
//Children is used to display the child components of the parent component
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
