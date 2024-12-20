import {z} from 'zod';

export const updateStudioSettingSchema = z.object({
    screen: z.string().optional(),
    audio: z.string().optional(),
    preset: z.enum(['HD', 'SD'])
})