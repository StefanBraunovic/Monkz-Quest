
import MetaMaskCard from '../components/connectors/MetaMaskCard'

import ProviderExample from '../components/ProviderExample'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{ display:'grid' , gridTemplateColumns:'1fr', placeItems:'center', height:'100vh'}}>
        <MetaMaskCard />
  
      </div>
    </>
  )
}
