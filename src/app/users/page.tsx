import React from 'react'
import Link from 'next/link'
export default function Simon(){
    return(
        <div><div>CEO page</div>
       <div className="mx-4 space-x-4  "> 
        
        <Link className="border border-4" href="users/cfo">CFO</Link>
        
        <Link className="border border-4" href="users/hr">HR</Link>
        </div> 
        </div>  
    )
}


