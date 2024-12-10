import React from 'react'
import { TitleBar } from './components'
import "./index.css";

interface Props {

}

const App = (props: Props) => {
  return (
    <div>
      CDS
      <TitleBar version={"MES x.0"}
        notification
        info
        settings
        moduleOnclick={() => { }} home={false} />
    </div>
  )
}

export default App
