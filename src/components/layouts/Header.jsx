


export default function Header({ userName }) {

    return (
        <header className="flex items-center justify-between bg-white px-1 py-1 shadow">
            
            {/* logo + Page title */}
            <div className="flex items-center">
                <img src="src/assets/logo/logo_yes.jpeg" alt="YES" className="w-13 h-12 rounded" />
                <span className="font-bold text-xl text-red-600">Your Education Skills</span>
            </div>

            {/* Avatar student */}
            <div className="flex items-center grap-2">
                <span className="text-gray-700 font-medium">👋 Xin chào, {userName}</span>
                <img src="src/assets/yaku_red_1.png" alt="Avatar" className="w-20 h-13 rounded-full" />
            </div>
        </header>
    )
}