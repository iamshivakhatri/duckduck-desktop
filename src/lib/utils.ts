import axios from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const httpsClient = axios.create({
  baseURL: import.meta.env.VITE_HOST_URL,
})


export const onCloseApp =()=> window.ipcRenderer.send('closeApp')

export const fetchUserProfile = async(clerkId: string) => {
  console.log("fetching user profile with clerkid ", clerkId)
  const response =  await httpsClient.get(`/auth/${clerkId}`,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
  return response.data
}

export const getMediaSources = async()=>{
  const displays = await window.ipcRenderer.invoke('getSources')
  const enumerateDevices = await window.navigator.mediaDevices.enumerateDevices()
  const audioInputs = enumerateDevices.filter(device => device.kind === 'audioinput')

  console.log('getting sources')
  return {displays, audioInputs}
}