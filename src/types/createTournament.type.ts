import z from 'zod'
export const formSchema = z.object({
    name: z.string().min(1, 'Tournament name is required'),
    orgName: z.string().min(1, 'Organization name is required'),
    game: z.enum(['VALORANT', 'BGMI']),
    slots: z.number().min(1, 'Slots must be at least 1'),
    unit: z.number().min(1, 'Unit must be at least 1'),
    prizePool: z.number().min(0, 'Prize pool must be non-negative'),
    registrationFee: z.number().min(0, 'Registration fee must be non-negative'),
    visibility: z.enum(['PUBLIC', 'HIDDEN']),
    startDate: z.date(),
    endDate: z.date(),
    prizePoolDistribution: z.object({
      first: z.number().min(0),
      second: z.number().min(0),
      third: z.number().min(0),
      fourth: z.number().min(0).optional(),
      mvp: z.number().min(0),
      pwmk: z.number().min(0).optional()
    }),
  })