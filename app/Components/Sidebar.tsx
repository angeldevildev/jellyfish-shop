"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, Menu, Check } from 'lucide-react'

import { Roboto, Lato } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })
const minecraft = localFont({ src: '../fonts/MinecraftBold.otf' })
const pressStart2P = localFont({ src: '../fonts/PressStart2P-Regular.ttf' })
const vt323 = localFont({ src: '../fonts/VT323-Regular.ttf' })

const menuItems = [
  {
    icon: "🏝️",
    label: "Survival",
    color: "bg-blue-500",
    content: "Welcome to the Survival world! Gather resources, build structures, and survive against mobs.",
    shopItems: [
      {
        name: "Goat",
        description: "Per un inizio da vero goat 🐐",
        price: 29.99,
        icon: "👑",
        benefits: [
          "Full Diamond + Unbreakable 2",
          "64 torce",
          "64 panini",
          "25 mele d'oro",
          "64 bistecche cotte",
          "43 lingotti di ferro",
          "38 lingotti di oro",
          "20 diamanti",
          "12 blocchi di ossidiana",
          "1 Enchanting Table",
          "2 letti",
          "25 sticks",
          "Join - Left Personalizzato",
          "Supporto Immediato",
        ],
        buyNowHref: "https://buy.stripe.com/cN22acdjx5Kt5rO7sv"
      },
      {
        name: "Heisenberg",
        description: "Per un inizio da vero Walter White!",
        price: 19.99,
        icon: "💎",
        benefits: [
          "Full Diamond",
          "64 torce",
          "45 panini",
          "14 mele d'oro",
          "64 bistecche cotte",
          "32 lingotti di ferro",
          "23 lingotti di oro",
          "8 diamanti",
          "12 blocchi di ossidiana",
          "1 Enchanting Table",
          "2 letti",
          "23 sticks",
        ],
        buyNowHref: "https://buy.stripe.com/9AQbKMenB1ud07u7su"
      },
      {
        name: "Smart",
        description: "Per un inizio 2 volte migliore del VIP!",
        price: 14.99,
        icon: "🧠",
        benefits: [
          "Full Ferro + Unbreakable 1",
          "64 torce",
          "64 bistecche cotte",
          "6 mele d'oro",
          "20 panini",
          "23 lingotti di ferro",
          "15 lingotti di oro",
          "2 letti",
          "23 sticks",
        ],
        buyNowHref: "https://buy.stripe.com/3cs6qsgvJ2yh5rO7st"
      },
      {
        name: "VIP",
        description: "Una buona scelta per iniziare la survival!",
        price: 9.99,
        icon: "💰",
        benefits: [
          "Full Ferro",
          "64 torce",
          "40 bistecche cotte",
          "15 lingotti di ferro",
          "2 letti",
          "16 sticks",
        ],
        buyNowHref: "https://buy.stripe.com/5kA8yAgvJa0J3jG6oo"
      },
      {
        name: "Kit di inizio",
        description: "Per iniziare, strumenti e risorse essenziali.",
        price: 4.99,
        icon: "🛠️",
        benefits: [
          "Full Pietra",
          "Armatura in chain",
          "64 torce",
          "32 bistecche cotte",
          "16 alberelli di quercia",
          "1 letto"
        ],
        buyNowHref: "https://buy.stripe.com/eVa9CE1AP4Gp07ucMQ"
      },
    ]
  },
  /** 
  { 
    icon: "💀",
    label: "Lifesteal",
    color: "bg-red-500",
    content: "In Lifesteal, every kill steals a heart from your victim. How long can you survive?",
    shopItems: [
      {
        name: "Heart Booster",
        description: "Aumenta i tuoi cuori massimi.",
        price: 14.99,
        icon: "❤️",
        benefits: [
          "+5 cuori massimi",
          "Rigenerazione rapida",
          "Immunità al veleno per 1 ora"
        ],
        buyNowHref: "https://example.com/buy/lifesteal-heart-booster"
      },
    ]
  },
  {
    icon: "⚔️",
    label: "KitPVP",
    color: "bg-orange-500",
    content: "Engage in intense PVP battles with custom kits and abilities!",
    shopItems: [
      {
        name: "Guerriero Kit",
        description: "Equipaggiamento da combattimento ravvicinato.",
        price: 24.99,
        icon: "🗡️",
        benefits: [
          "Spada di diamante incantata",
          "Armatura completa in ferro",
          "Pozioni di forza x3",
          "Mele dorate x5"
        ],
        buyNowHref: "https://example.com/buy/kitpvp-warrior-kit"
      },
    ]
  },
  */
]

export default function MinecraftStore() {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedItem, setSelectedItem] = useState(menuItems[0])
  const [selectedShopItem, setSelectedShopItem] = useState<any | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className={`flex h-screen bg-gray-900 text-white ${roboto.className}`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isMobile ? 'w-full' : 'w-64'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
          { /** 
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            */
          }
            <span className={`text-xl font-bold ${minecraft.className}`}>SHOP</span>
          </div>
          {isMobile && (
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
              <ChevronLeft size={24} />
            </button>
          )}
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setSelectedItem(item)
                setSelectedShopItem(null)
                if (isMobile) setIsOpen(false)
              }}
              className={`w-full p-3 flex items-center space-x-3 hover:bg-gray-700 transition-colors ${
                selectedItem.label === item.label ? 'bg-gray-700' : ''
              } ${vt323.className}`}
            >
              <span className={`w-8 h-8 rounded flex items-center justify-center ${item.color}`}>
                {item.icon}
              </span>
              <span className='text-3xl'>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className={`flex-1 ${isOpen && !isMobile ? 'ml-64' : ''}`}>
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          {isMobile && (
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
              <Menu size={24} />
            </button>
          )}
          <h1 className={`text-2xl font-bold ${minecraft.className} sm-phone:text-sm`}>JELLYFISHMC SHOP</h1>
        </header>
        <main className="p-6">
          {selectedShopItem ? (
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-5xl font-bold mb-2 ${pressStart2P.className}`}>{selectedShopItem.name.toUpperCase()}</h2>
              <p className={`text-xl mb-8 text-gray-400 ${lato.className}`}>Prodotto relativo al server {selectedItem.label}</p>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{selectedShopItem.icon}</div>
                    <div>
                      <h3 className={`text-2xl font-bold ${vt323.className}`}>{selectedShopItem.name}</h3>
                      <p className={`text-gray-400 ${lato.className}`}>{selectedShopItem.description}</p>
                    </div>
                  </div>
                  <p className={`text-3xl font-bold ${vt323.className}`}>{selectedShopItem.price.toFixed(2)} EUR</p>
                </div>
                <div className="mb-6">
                  <h4 className={`text-2xl font-bold mb-2 ${vt323.className}`}>Benefits:</h4>
                  <ul className="space-y-2">
                    {selectedShopItem.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <span className={`${lato.className}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedShopItem.buyNowHref && (
                  <Link href={selectedShopItem.buyNowHref} passHref>
                    <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition duration-300">
                      Compra Ora
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <>
              <h2 className={`text-3xl font-bold mb-4 ${pressStart2P.className}`}>{selectedItem.label} Shop</h2>
              <p className={`mb-6 ${lato.className}`}>{selectedItem.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedItem.shopItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedShopItem(item)}
                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors text-left flex flex-col items-center"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className={`text-2xl font-bold mb-2 ${vt323.className}`}>{item.name}</h3>
                    <p className={`text-sm text-gray-400 mb-4 ${lato.className}`}>{item.description}</p>
                    <p className={`text-lg font-bold ${vt323.className}`}>{item.price.toFixed(2)} EUR</p>
                  </button>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}