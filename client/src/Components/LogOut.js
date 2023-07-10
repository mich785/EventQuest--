import React, { useEffect } from "react";


function LogOut() {
  useEffect(()=>{
    fetch(`/logout`, {
      method: "DELETE",
    })
  })
}
export default LogOut