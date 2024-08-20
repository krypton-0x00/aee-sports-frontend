import z from "zod";

export const tourneyValidation = z.object({
    tournamentName: z.string().trim().toLowerCase().min(3,"touranament name must be more than 3").max(30, "tournament name cannot be more than 30"),
    slots: z.number().min(1).max(25),
    status: z.enum(['UPCOMING', 'ONGOING', 'COMPLETED']),
    visibility: z.enum(['HIDDEN', 'PUBLISHED']),
    duration: z.number().min(1, "Duration must be more than 1 days").max(93,"duration cannot be more than 93 days")
  })