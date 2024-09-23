import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./config/firestore"

const getMessages = async () => {
  try {
    const q = query(collection(db, "messages"), where("text", "==", "test"))
    const snapshot = await getDocs(q)
    if (snapshot.empty) {
      console.log("No matching documents.")
      return
    }
    console.log("Messages:")
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data())
    })
  } catch (error) {
    console.error("Error getting documents: ", error)
  }
}

function App() {
  const [data, setData] = useState<any>(undefined)
  useEffect(() => {
    getMessages()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
