import { useState } from "react"
// localStorage.clear()
export const Perfect=()=>{
const [oldname,newname]=useState("")
const [oldlast,newlast]=useState("")
const [oldemail,newemail]=useState("")
const [oldphone,newphone]=useState("")
const handleop=()=>{
    const op={

        name:`${oldname}`,
        oldlast:`${oldlast}`
    }
    localStorage.setItem(`${oldname}`,JSON.stringify(op))
}
    return(
        <>
        <div class="md:hidden">
        <div>Hello,my name is</div>
        <div class="ml-2" style={{color:"aqua"}}>{oldname}{oldlast}.</div>
        <div>My email address is</div>
        <div class="ml-2" style={{color:"aqua"}}>{oldemail}.</div>
        <div>My Phone number is</div>
        <div class="ml-2" style={{color:"aqua"}}>{oldphone}.</div>
        </div>

        <div class=" hidden md:flex justify-center sm:">
        <div>Hello,my name is</div>
        <div class="ml-2" style={{color:"aqua"}}>{oldname}{oldlast}.</div>
        <div>My email address is</div>
        <div class="ml-2" style={{color:"aqua"}}>{oldemail}.</div>
        <div>My Phone number is</div>
        <div class="ml-2" style={{color:"aqua"}}>{oldphone}.</div>

        </div>
        <div class="flex justify-center mt-20">
        <div style={{border:"2px solid white",width:"400px", height:"530px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)", }}>
        <div class="mt-4 ml-3"><h1 style={{fontSize:"30px",fontStyle:"italic"}}>Sign Up</h1></div>
        <div class="ml-3">Please fill in this form to create an account</div>
        <div class="mt-4 ml-3"><h1 style={{fontSize:"20px",fontStyle:"italic"}}>First Name</h1></div>
        <div><input type="text" style={{backgroundColor:"lightgrey",width:"350px"}} placeholder="enter first name" class="ml-2" onChange={(event)=>newname(event.target.value)}></input></div>
        <div class="mt-4 ml-3"><h1 style={{fontSize:"20px",fontStyle:"italic"}}> Last Name</h1></div>
        <div><input type="text" style={{backgroundColor:"lightgrey",width:"350px"}} placeholder="enter last name" class="ml-2" onChange={(event)=>newlast(event.target.value)}></input></div>
        <div class="mt-4 ml-3"><h1 style={{fontSize:"20px",fontStyle:"italic"}}>Email</h1></div>
        <div><input type="text" style={{backgroundColor:"lightgrey",width:"350px"}} placeholder="Enter email" class="ml-2" onChange={(event)=>newemail(event.target.value)}></input></div>
        <div class="mt-4 ml-3"><h1 style={{fontSize:"20px",fontStyle:"italic"}}>Password</h1></div>
        <div><input type="text" style={{backgroundColor:"lightgrey",width:"350px"}} placeholder="Enter Password" class="ml-2"></input></div>
        <div class="mt-4 ml-3"><h1 style={{fontSize:"20px",fontStyle:"italic"}}>Phone Number</h1></div>
        <div><input type="text" style={{backgroundColor:"lightgrey",width:"350px"}} placeholder="Enter your phone number" class="ml-2"  onChange={(event)=>newphone(event.target.value)}></input></div>
       <div class="flex">
        <div class="mt-4 ml-3"><h1 style={{fontSize:"13px",fontStyle:"italic"}}>By creating an account you agree to our</h1></div>
        <div><h1 style={{fontSize:"13px",fontStyle:"italic",color:"lightblue"}} class="mt-4">Terms and Policy</h1></div>
</div>
<div class="ml-2 mt-2"><button class="flex justify-center" style={{backgroundColor:"lightblue",width:"360px",border:"1px solid lightblue",borderRadius:"20px"}} onClick={handleop}>Sign up</button></div>
        </div>
        </div>
        </>
    )
}