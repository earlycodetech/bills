import { HistoryTab } from "@/components/HistoryTab"

//delete this later
const dummy = [1,2,3,4];

export default function History () {
    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-sky-100 via-sky-200 to-blue-300">
            <div className="w-[380px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">My loan history</h1>
                <div className="flex flex-col gap-4">
                    {dummy.map(loan => <HistoryTab 
                    amount={5000} 
                    rate={12.5} 
                    duration={30}
                    date="13 JUL 2024"
                    type="Personal"
                    key={loan}/>)}
                </div>
            </div>
        </main>
    )
}