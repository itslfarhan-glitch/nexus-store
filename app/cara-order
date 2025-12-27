import { Header } from "@/components/Header"
import { ShoppingCart, User, QrCode, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Pilih Produk",
    description: "Pilih produk atau layanan digital yang tersedia sesuai kebutuhanmu.",
    icon: ShoppingCart,
    number: "01",
  },
  {
    title: "Masukkan Data",
    description: "Isi data yang dibutuhkan seperti username, link, atau ID target.",
    icon: User,
    number: "02",
  },
  {
    title: "Pembayaran QRIS",
    description: "Lakukan pembayaran melalui QRIS sesuai nominal yang tertera.",
    icon: QrCode,
    number: "03",
  },
  {
    title: "Pesanan Diproses",
    description: "Sistem akan otomatis memproses pesanan setelah pembayaran terdeteksi.",
    icon: CheckCircle,
    number: "04",
  },
]

export default function CaraOrder() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-14">
        {/* TITLE */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl font-bold">Cara Order</h1>
          <p className="mt-3 text-gray-600">
            Ikuti langkah berikut untuk melakukan pemesanan dengan mudah.
          </p>
        </section>

        {/* STEPS */}
        <section className="grid gap-6 sm:grid-cols-2">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="group relative rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {/* NUMBER */}
                <span className="absolute right-6 top-6 text-sm font-semibold text-gray-300">
                  {step.number}
                </span>

                {/* ICON */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white transition group-hover:scale-105">
                  <Icon size={22} />
                </div>

                {/* CONTENT */}
                <h3 className="mb-2 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </section>

        {/* NOTE */}
        <section className="mt-12 rounded-2xl border bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-600">
            ⚡ Semua pesanan diproses otomatis. Jika ada kendala, silakan hubungi admin.
          </p>
        </section>
      </main>
    </>
  )
}
  
