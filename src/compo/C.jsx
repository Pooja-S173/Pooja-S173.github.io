import { Context } from "../usercontext"
import { useContext } from "react"
export default function C(){
    const instname  =useContext(Context)
   return(
    <>
    <h1> My Institution name is: { instname }</h1>
    </>
   )

}