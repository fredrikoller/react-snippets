import React from "react";
import SideNavClass from "./SideNav/SideNavClass"

export default function Layout({ children }) {

  return (
    <>
      <SideNavClass />

      {children}
    </>
  )
}