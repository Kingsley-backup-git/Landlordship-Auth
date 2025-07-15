import React from 'react'
import styles from "./loader.module.css"
export default function MainLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white flex justify-center items-center">
  <span className = {styles.loader}></span>
  </div>
  )
}
