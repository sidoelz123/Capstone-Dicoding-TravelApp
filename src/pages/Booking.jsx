import React from 'react'
import PlaceCard from '../components/Places/PlaceCard';
import Img1 from "../assets/places/CandiBorobudur.jpg";
import Img2 from "../assets/places/Pantaipandawa.jpeg";
import Img3 from "../assets/places/dieng.jpg";

const Booking = () => {
    const PlacesData = [
        // {
        //   img: Img1,
        //   title: "Candi Borobudur",
        //   location: "Magelang, Yogyakarta",
        //   description:
        //     "Candi Borobudur adalah sebuah maha karya arsitektur dan seni yang memukau dunia. Dengan desain yang kompleks, relief indah, dan simbolisme mendalam, candi ini tidak hanya menjadi saksi sejarah dan warisan budaya Indonesia, tetapi juga menginspirasi pengunjung dari seluruh dunia. Keindahan dan makna di balik arsitektur spektakuler Candi Borobudur akan terus memikat dan mengagumkan kita sepanjang masa..",
        //   price: 50000,
        //   type: "Buka setiap hari di jam : 06.30-16.30",
        // },
        // {
        //   img: Img2,
        //   title: "Pantai Pandawa",
        //   location: "Bali",
        //   description:
        //     "Pantai Pandawa terletak di Desa Kutuh, Kuta Selatan, Badung, Bali. Pantai ini bisa ditempuh selama 30 menit dari Nusa Dua dan Uluwatu",
        //   price: 100000,
        //   type: "Setiap hari buka pukul 07.00-18.00",
        // },
        // {
        //   img: Img3,
        //   title: "Dieng, Negeri atas awan",
        //   location: "Wonosobo",
        //   description:
        //     "Dataran Tinggi Dieng, dikenal juga sebagai Dieng Plateau, memiliki ciri khas administratif dan geografis yang langka di Indonesia. Wilayah ini terbagi menjadi dua wilayah administratif yang terpisah, yaitu Dieng Kulon di Kabupaten Wonosobo (bagian barat) dan Dieng Wetan di Kabupaten Banjarnegara (bagian timur)",
        //   price: 6200,
        //   type: "Wonosobo, Jawa Tengah",
        // }
      ];
  return (
    <section className='mt-20 container'>
        {PlacesData && PlacesData.length > 0 ?
        (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-10">
            {PlacesData.map((item, index) => (
              <PlaceCard
                key={index}
                {...item}
              />
            ))}
          </div>) :
        (<section className="h-screen -my-20 flex flex-col justify-center">
            <div className="py-8 px-4 text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Tidak ada data</h1>
                <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">silahkan tambahkan data terlebih dahulu</p>
            </div>
        </section>)}
    </section>
  )
}

export default Booking