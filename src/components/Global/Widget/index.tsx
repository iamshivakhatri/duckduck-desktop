import { useUser, ClerkLoading, SignedIn } from '@clerk/clerk-react'
import React,{useEffect, useState} from 'react'
import Loader from '../Loader'
import { fetchUserProfile } from '@/lib/utils'


interface Subscription {
    plan: 'PRO' | 'FREE';
}

interface Studio {
    id: string;
    screen: string | null;
    mic: string | null;
    preset: 'HD' | 'SD';
    camera: string | null;
    userId: string | null;
}

interface User {
    subscription: Subscription | null;
    studio: Studio | null;
    id: string;
    email: string;
    firstname: string | null;
    lastname: string | null;
    createdAt: Date;
    clerkid: string;
}

interface Profile {
    status: number;
    user: User | null;
}

const Widget = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const {user} = useUser()


    useEffect(() => {
        if(user && user.id){
            fetchUserProfile(user.id).then((p)=> setProfile(p))
        }
    }, [])

  return (
    <div className='p-5' >
        <ClerkLoading>
            <div className='h-full flex justify-center items-center'>
                <Loader state={true} />
            </div>
        </ClerkLoading>
        <SignedIn>
            {user?.firstName}
        </SignedIn>
    </div>
  )
}

export default Widget