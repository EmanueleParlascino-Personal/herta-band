import type { AppProps } from 'next/app'
import "./Styles/global.css"
import { StateContext } from '../context/StateContext'
import {Toaster} from 'react-hot-toast'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Toaster />
      <Component {...pageProps} />
    </StateContext>
  )
}