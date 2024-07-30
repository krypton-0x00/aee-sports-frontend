import SparklesText from '@/components/ui/Sparkles'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table'

function Leaderboard () {
  return (
    <div className='flex  justify-center flex-col items-center'>
      <SparklesText text='Leaderboard' className='text-4xl py-4' />
      <Table className=''>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Leaderboard
