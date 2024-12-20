import { useState, useEffect } from 'react';
import { useZodForm } from './useZodForm';
import { useMutation } from '@tanstack/react-query';
import { updateStudioSettingSchema } from '@/schemas/sudio-setting.schema';
import { updateStudioSetting } from '@/lib/utils';
import { toast } from 'sonner';

export const useStudioSettings = (
    id: string,
    screen?: string | null,
    audio?: string | null,
    preset?: 'HD' | 'SD',
    plan?: 'PRO' | 'FREE',

) => {
    const [onPreset, setPreset] = useState<'HD' | 'SD'| undefined>()
    const {register, watch} = useZodForm(updateStudioSettingSchema, {
       screen: screen!,
       audio: audio!,
       preset: preset!
    })

    const { mutate, isPending } = useMutation({
        mutationKey: ['update-studio'],
        mutationFn: (data: {
            screen: string;
            id: string;
            audio: string;
            preset: 'HD' | 'SD';
        }) => updateStudioSetting(data.id, data.screen, data.audio, data.preset),
        onSuccess: (data) => {
            console.log('updated')
            return toast(data.status === 200? 'Success' : 'Error',{
                description: data.message,
            })
        }
    });

    useEffect(()=>{
        if(screen && audio && preset){
           window.ipcRenderer.send('media-sources',
             {
            screen,
            id: id,
            audio,
            preset,
            plan,     
            })
        }
    }, [])

    useEffect(()=>{
       const subscribe = watch((values)=> {
        setPreset(values.preset)
        mutate({
            screen: values.screen!,
            id: id,
            audio: values.audio!,
            preset: values.preset!,
        })
      })
    }, [watch])

    return {}
}

