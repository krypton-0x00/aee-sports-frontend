import z from 'zod'
export const formSchema = z.object({
    name: z.string().min(4, 'Tournament name is required').max(100,"Tournament name cannot be more than 100"),
    orgName: z.string().min(5, 'Organization name is required').max(30,"Organization name cannot be more than 30"),
    game: z.enum(['VALORANT', 'BGMI']),
    slots: z.number().min(1, 'Slots must be at least 1'),
    status: z.enum(["UPCOMING", "ONGOING", "COMPLETED"]),
    unit: z.number().min(4, 'Unit must be at least 4').max(5,"Unit cannot be more than 5"),
    prizePool: z.number().min(0, 'Prize pool must be non-negative'),
    registrationFee: z.number().min(0, 'Registration fee must be non-negative'),
    visibility: z.enum(['PUBLIC', 'HIDDEN']),
    startDate: z.date(),
    endDate: z.date(),
    // prizePoolDistribution: z.object({
    //   first: z.number().min(0),
    //   second: z.number().min(0),
    //   third: z.number().min(0),
    //   fourth: z.number().min(0).optional(),
    //   mvp: z.number().min(0),
    //   pwmk: z.number().min(0).optional()
    // }),
  })