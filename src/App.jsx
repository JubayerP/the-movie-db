import { RouterProvider } from "react-router-dom"
import Header from "./components/Header/Header"
import { router } from "./Routes/Routes"


function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
