import { InfiniteMovingCards } from './ui/infinte-cards'
interface testimonialTypes {
  quote: string
  name: string
  title: string
}
const testimonials: testimonialTypes[] = [
  { quote: 'Mazedar', name: 'akash', title: 'me hu akash' },
  { quote: 'Bhut badhiya', name: 'insane', title: 'me hu insane' },
  { quote: 'Are bhai mza aa gya', name: 'marco', title: 'me hu marco' },
  { quote: 'Are bhai kya baat h ', name: 'krypton', title: 'me hu krypton' }
]
function Reviews () {
  return (
    <div className="md:h-[30rem] h-[18rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl font-semibold">Reviews</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        pauseOnHover={false}
      />
    </div>
  )
}

export default Reviews
