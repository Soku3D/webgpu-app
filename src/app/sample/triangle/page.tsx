import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  
  return (
    
    <> 
       <Script src="../main.js" async />
       <body>
            <canvas id="gpuCanvas" width="800" height="600"></canvas>
       </body>
        
    </>
  )
}
