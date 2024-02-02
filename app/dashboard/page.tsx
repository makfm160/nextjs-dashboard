import { Card } from '@/app/ui/dashboard/cards'
import RevenueChart from '../ui/dashboard/revenue-chart'
import LatestInvoices from '../ui/dashboard/latest-invoices'
import { lusitana } from '@/app/ui/fonts'

export default function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard 5
            </h1>
        </main>
    )
}