import TurfCard from "../components/TurfCard"
import { grounds } from "../data/grounds"

function Home() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-10">
                <section className="text-center py-20">
                    <h1 className="text-5xl font-bold">Book Your Turf Instantly</h1>
                    <p className="text-gray-600 mt-4">Find and reserve sports turfs near you.</p>
                    <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Explore Turfs</button>
                </section>
                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center">Our Grounds</h2>
                    <div className="grid grid-cols-3 gap-6 mt-10">
                            {grounds.map((g) => 
                                 (
                                    <TurfCard key={g.id} id={g.id} name={g.name} price={g.price}/>
                                )
                            )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home