import React from "react";
import "./SideNav.module.css";

export default function SideNav() {

  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <span onClick={openNav}></span>
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick={closeNav}>&times;</a>
        <a href="#">Hallå?</a>

      </div>
    </>
  )
}