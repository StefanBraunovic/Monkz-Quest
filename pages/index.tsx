
import MetaMaskCard from '../components/connectors/MetaMaskCard'

import ProviderExample from '../components/ProviderExample'

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
  
      </div>
    </>
  )
}
