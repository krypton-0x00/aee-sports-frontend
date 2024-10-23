"use client"
import {RecoilRoot} from "recoil"



//TODO: Remove any
const RecoilContextProvider = ({children}:any) => {
  return <RecoilRoot>
    {children}
  </RecoilRoot>
}

export default RecoilContextProvider
