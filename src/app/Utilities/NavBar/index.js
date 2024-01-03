import Link from "next/link"

const NavBar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex justify-between p-4">
                <Link href="/" className="font-bold text-white md:text-2xl sm:text-xl">LOVINIME</Link>
                <input placeholder="cari anime..." className=""/>
            </div>
        </header>
    )
}

export default NavBar