import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react"
const AuthButton =()=>{
    return(
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>
    )
}

export default AuthButton