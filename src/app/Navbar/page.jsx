import React from "react";
import Link from "next/link"

const Navbar= () =>{

return(
<div className="nav-container">
<div className="logo">
    <Link href = "/">Homepage</Link>




</div>
<a href="/Resume" className="cta-btn">Resume</a>
</div>


)

};
export default Navbar