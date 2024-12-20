import { SourceDeviceStateProps } from '@/hooks/useMediaSources'
import React from 'react'

type Props = {
    state: SourceDeviceStateProps
    user:
    |({
        subscription:{
            plan: 'PRO' | 'FREE'
        }| null
        studio:{
            id: string
            screen: string | null
            mic: string | null
            preset: 'HD' | 'SD'
            camera: string | null
            userId: string | null
        }|null
    
    }) & {
        id: string
        email: string
        firstname: string | null
        lastname: string | null
        createdAt: Date 
        clerkid: string
    } | null
}

const MediaConfiguration = ({state, user}: Props) => {
    const {} = useStudioSettings()
  return (
    <form action="" className='flex h-full relative w-full flex-col gap-y-5'>

    </form>
  )
}

export default MediaConfiguration