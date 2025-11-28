import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Menu, Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* --- HEADER --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
             {/* Logó helye */}
            <div className="bg-blue-700 text-white font-black text-2xl px-3 py-1 rounded skew-x-[-10deg]">
              <span className="skew-x-[10deg] block">TRIVOTOYS.HU</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 font-bold text-gray-700">
            <Link href="#kategoriak" className="hover:text-blue-600 transition">Kategóriák</Link>
            <Link href="#ajanlatok" className="hover:text-blue-600 transition">Kiemelt ajánlatok</Link>
            <Link href="#rolunk" className="hover:text-blue-600 transition">Rólunk</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-full transition shadow-md hidden sm:block">
              Webshop
            </button>
            <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
            <Menu className="w-6 h-6 text-gray-700 md:hidden cursor-pointer" />
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Háttérkép helye - Majd cseréld le a generált képre */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://placehold.co/1920x1080/2563eb/FFFFFF/png?text=Hero:+Gyerek+jatszik+Bruder+markoloval+homokban" 
            alt="Bruder játék markoló" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="bg-yellow-400 text-blue-900 font-bold inline-block px-3 py-1 mb-4 rounded text-sm uppercase tracking-wider">
              Német minőség 1926 óta
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Építsd fel a képzelet világát!
            </h1>
            <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
              Eredeti Bruder játékok: valósághű működés, strapabíró kialakítás és határtalan játékélmény kicsiknek és nagyoknak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://webshop.trivotoys.hu" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                Irány a webáruház <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Hullám elválasztó alul */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
           <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>
      </section>

      {/* --- KATEGÓRIÁK (A kért 4 csempe) --- */}
      <section id="kategoriak" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Fedezd fel a kategóriákat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Válaszd ki a kedvenc munkagépedet! Legyen szó építkezésről vagy farmról, nálunk mindent megtalálsz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Kategória 1 */}
            <CategoryCard 
              title="Mezőgazdasági gépek" 
              color="bg-green-600"
              imgSrc="https://placehold.co/400x400/16a34a/FFFFFF/png?text=Traktor+es+Kombajn"
            />
            {/* Kategória 2 */}
            <CategoryCard 
              title="Építőgépek" 
              color="bg-yellow-500"
              imgSrc="https://placehold.co/400x400/eab308/FFFFFF/png?text=Markolo+es+Daru"
            />
            {/* Kategória 3 */}
            <CategoryCard 
              title="Közhasznú járművek" 
              color="bg-orange-500"
              imgSrc="https://placehold.co/400x400/f97316/FFFFFF/png?text=Kukasauto+es+Mentos"
            />
            {/* Kategória 4 */}
            <CategoryCard 
              title="Logisztika, Szállítmányozás" 
              color="bg-blue-600"
              imgSrc="https://placehold.co/400x400/2563eb/FFFFFF/png?text=Kamion+es+Targonca"
            />
          </div>
        </div>
      </section>

      {/* --- NÉPSZERŰ TERMÉKEK (Minél több termék kérés) --- */}
      <section id="ajanlatok" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Legnépszerűbb modellek</h2>
              <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            </div>
            <Link href="/shop" className="hidden md:flex items-center text-blue-600 font-bold hover:underline">
              Összes termék megtekintése <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
                <div className="relative h-48 bg-gray-100 p-4 flex items-center justify-center">
                  <Image 
                    src={`https://placehold.co/300x200/png?text=Bruder+Jatek+${item}`} 
                    alt="Játék" 
                    width={300} 
                    height={200}
                    className="group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Bruder Pro Series Modell {item}</h3>
                  <p className="text-sm text-gray-500 mb-4">Prémium minőségű, 1:16 méretarány</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">
                    Megnézem
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link href="/shop" className="inline-block bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full">
              Összes termék
            </Link>
          </div>
        </div>
      </section>

      {/* --- ELŐNYÖK SÁV --- */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
             <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🇩🇪</div>
             <h3 className="font-bold text-xl mb-2">Német Minőség</h3>
             <p className="text-blue-200">Kiváló anyaghasználat és precíz gyártás.</p>
          </div>
          <div className="p-4">
             <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🚜</div>
             <h3 className="font-bold text-xl mb-2">Valósághű Funkciók</h3>
             <p className="text-blue-200">Működő alkatrészek az igazi élményért.</p>
          </div>
          <div className="p-4">
             <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">📦</div>
             <h3 className="font-bold text-xl mb-2">Gyors Szállítás</h3>
             <p className="text-blue-200">Raktárról, akár másnapra nálad lehet.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <h4 className="text-white text-2xl font-black mb-4 skew-x-[-10deg] inline-block bg-blue-700 px-2">TRIVOTOYS</h4>
              <p className="text-sm leading-relaxed mb-4">
                A legjobb Bruder játékok hivatalos forgalmazója. Hozd el a munka örömét a gyerekszobába!
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Vásárlás</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-yellow-400 transition">Webáruház</Link></li>
                <li><Link href="#" className="hover:text-yellow-400 transition">Szállítási infók</Link></li>
                <li><Link href="#" className="hover:text-yellow-400 transition">Garancia</Link></li>
                <li><Link href="#" className="hover:text-yellow-400 transition">ÁSZF</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Kapcsolat</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Phone size={16} /> +36 1 234 5678</li>
                <li className="flex items-center gap-2"><Mail size={16} /> info@trivotoys.hu</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> 1111 Budapest, Játék u. 1.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Hírlevél</h4>
              <p className="text-xs mb-3">Iratkozz fel az újdonságokért!</p>
              <div className="flex">
                <input type="email" placeholder="E-mail cím" className="bg-gray-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-blue-500" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r font-bold text-white">OK</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 Trivotoys. Minden jog fenntartva.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Adatkezelés</span>
              <span>Süti beállítások</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Komponens a kategória kártyákhoz
function CategoryCard({ title, color, imgSrc }: { title: string, color: string, imgSrc: string }) {
  return (
    <Link href="/shop" className="group relative block h-64 overflow-hidden rounded-2xl shadow-lg cursor-pointer">
      {/* Kép háttér */}
      <Image 
        src={imgSrc} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Címke */}
      <div className={`absolute bottom-0 left-0 w-full p-4`}>
        <div className={`${color} text-white font-bold text-center py-3 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition duration-300`}>
          {title}
        </div>
      </div>
    </Link>
  );
}
