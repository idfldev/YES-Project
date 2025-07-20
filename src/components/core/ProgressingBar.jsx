
export default function PressingBar() {
    return (
        <>
            <div className="bg-gray-200 h-3 rounded-full mt-2 mb-4">
                <div className="bg-green-500 h-3 rounded-full" style={{width: "35%"}}></div>
            </div>
            <p className="text-sm text-gray-600">Completed: 35%</p>
        </>
    )
}