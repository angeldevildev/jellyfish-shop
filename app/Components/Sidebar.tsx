"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, Menu, Check, Coins, ChevronDown, ChevronUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

import { Roboto, Lato } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })
const minecraft = localFont({ src: '../fonts/MinecraftBold.otf' })
const pressStart2P = localFont({ src: '../fonts/PressStart2P-Regular.ttf' })
const vt323 = localFont({ src: '../fonts/VT323-Regular.ttf' })

interface Benefit {
  name: string;
  description?: string;
  subBenefits?: string[];
}

interface ShopItem {
  name: string;
  description: string;
  price: number;
  icon: string;
  benefits: Benefit[];
  buyNowHref?: string;
}

const menuItems = [
  {
    icon: "🏝️",
    label: "Survival",
    color: "bg-blue-500",
    content: "Benvenuti nel mondo della survival! Raccogliete risorse, costruite strutture e sopravvivete contro i mobs.",
    shopItems: [
      {
        name: "Hacked",
        description: "Vuoi proprio inziare da OP?",
        price: 49.99,
        icon: "🐱‍💻",
        benefits: [
          { name: "Full Netherite + Unbreakable 3", subBenefits: ["Elmo: Protection III, Thorns III, Unbreaking III, Mending, Silence Armor Trim", "Corazza: Protection III, Thorns III, Unbreaking III, Mending, Silence Armor Trim", "Gambiere: Fire Protection III, Thorns III, Unbreaking III, Mending, Silence Armor Trim", "Stivali: Fire Protection IV, Thorns III, Mending, Silcence Armor Trim"] },
          { name: "64 blocchi di ossidiana" },
          { name: "64 cristalli dell'end" },
          { name: "128 razzi" },
          { name: "2 elytra" },
          { name: "64 mele d'oro" },
          { name: "32 mele OP" },
          { name: "1 Enchanting Table" },
          { name: "42 bistecche cotte" },
          { name: "16 blocchi di netherite" },
          { name: "32 blocchi di diamante" },
          { name: "5 totem" },
          { name: "Join - Left Personalizzato", description: "Messaggi personalizzati quando entri o esci dal server" },
          { name: "Supporto Immediato", description: "Accesso prioritario al supporto del server" },
        ],
        buyNowHref: "https://buy.stripe.com/cN22acdjx5Kt5rO7sv"
      },
      {
        name: "Goat",
        description: "Per un inizio da vero goat 🐐",
        price: 29.99,
        icon: "👑",
        benefits: [
          { name: "Full Diamond + Unbreakable 2" },
          { name: "64 torce" },
          { name: "64 panini" },
          { name: "25 mele d'oro" },
          { name: "4 mele op" },
          { name: "1 elytra" },
          { name: "2 totem" },
          { name: "32 razzi" },
          { name: "64 bistecche cotte" },
          { name: "43 lingotti di ferro" },
          { name: "38 lingotti di oro" },
          { name: "20 diamanti" },
          { name: "12 blocchi di ossidiana" },
          { name: "32 cristalli dell'end" },
          { name: "1 Enchanting Table" },
          { name: "2 letti" },
          { name: "25 sticks" },
          { name: "Join - Left Personalizzato", description: "Messaggi personalizzati quando entri o esci dal server" },
          { name: "Supporto Immediato", description: "Accesso prioritario al supporto del server" },
        ],
        buyNowHref: "https://buy.stripe.com/cN22acdjx5Kt5rO7sv"
      },
      {
        name: "Heisenberg",
        description: "Per un inizio da vero Walter White!",
        price: 19.99,
        icon: "💎",
        benefits: [
          { name: "Full Diamond" },
          { name: "64 torce" },
          { name: "45 panini" },
          { name: "14 mele d'oro" },
          { name: "64 bistecche cotte" },
          { name: "32 lingotti di ferro" },
          { name: "23 lingotti di oro" },
          { name: "8 diamanti" },
          { name: "12 blocchi di ossidiana" },
          { name: "12 cristalli dell'end" },
          { name: "1 Enchanting Table" },
          { name: "2 letti" },
          { name: "23 sticks" },
          { name: "Join - Left Personalizzato", description: "Messaggi personalizzati quando entri o esci dal server" },
          { name: "Supporto Immediato", description: "Accesso prioritario al supporto del server" },
        ],
        buyNowHref: "https://buy.stripe.com/9AQbKMenB1ud07u7su"
      },
      {
        name: "Smart",
        description: "Per un inizio 2 volte migliore del VIP!",
        price: 14.99,
        icon: "🧠",
        benefits: [
          { name: "Full Ferro + Unbreakable 1" },
          { name: "64 torce" },
          { name: "64 bistecche cotte" },
          { name: "6 mele d'oro" },
          { name: "20 panini" },
          { name: "23 lingotti di ferro" },
          { name: "15 lingotti di oro" },
          { name: "2 letti" },
          { name: "23 sticks" },
        ],
        buyNowHref: "https://buy.stripe.com/3cs6qsgvJ2yh5rO7st"
      },
      {
        name: "VIP",
        description: "Una buona scelta per iniziare la survival!",
        price: 9.99,
        icon: "💰",
        benefits: [
          { name: "Full Ferro" },
          { name: "64 torce" },
          { name: "40 bistecche cotte" },
          { name: "15 lingotti di ferro" },
          { name: "2 letti" },
          { name: "16 sticks" },
        ],
        buyNowHref: "https://buy.stripe.com/5kA8yAgvJa0J3jG6oo"
      },
    ]
  },
  {
    icon: "💰",
    label: "Coins",
    color: "bg-yellow-500",
    content: "I coins sono coloro che potrai usare per comprare oggetti o ranks nel server tramite lo /shop, /balance per vedere il tuo saldo corrente",
    shopItems: [
      {
        name: "100K coins",
        description: "Aumenta i tuoi coins di 100K!",
        price: 9.99,
        icon: "💰",
        buyNowHref: "https://buy.stripe.com/5kA4ik0wLegZ6vSaEJ",
        benefits: [
          { name: "Bonus di 10K coins extra" },
        ]
      },
      {
        name: "500K coins",
        description: "Aumenta i tuoi coins di 500K!",
        price: 19.99,
        icon: "💰",
        buyNowHref: "https://buy.stripe.com/dR64ikcft8WF07u6ou",
        benefits: [
          { name: "Bonus di 50K coins extra" },
          { name: "Tag VIP per 2 settimane", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Accesso anticipato alle nuove funzionalità del server" },
        ]
      },
      {
        name: "1M coins",
        description: "Aumenta i tuoi coins di 1M!",
        price: 29.99,
        icon: "💰",
        buyNowHref: "https://buy.stripe.com/4gw8yA7Zd2yh5rO7sz",
        benefits: [
          { name: "Bonus di 100K coins extra" },
          { name: "Tag Goat per 3 settimane", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Accesso anticipato a sconti futuri" },
        ]
      },
      {
        name: "3M coins",
        description: "Aumenta i tuoi coins di 3M!",
        price: 59.99,
        icon: "💰",
        benefits: [
          { name: "Bonus di 250K coins extra" },
          { name: "Accesso anticipato alle nuove funzionalità del server" },
          { name: "Tag Heisenberg per 1 mese", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Oggetti esclusivi nel server" },
        ],
        buyNowHref: "https://buy.stripe.com/8wMg127Zd5Ktg6s14c"
      },
      {
        name: "5M coins",
        description: "Aumenta i tuoi coins di 5M!",
        price: 79.99,
        icon: "💰",
        benefits: [
          { name: "Bonus di 500K coins extra" },
          { name: "Accesso anticipato alle nuove funzionalità del server" },
          { name: "Tag Hacked per 2 mesi", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Oggetti Esclusivi" },
          { name: "Accesso esclusivo a eventi futuri" },
        ],
        buyNowHref: "https://buy.stripe.com/aEU3egenBdcV6vScMV"
      },
      {
        name: "7M coins",
        description: "Aumenta i tuoi coins di 7M!",
        price: 89.99,
        icon: "💰",
        benefits: [
          { name: "Bonus di 750K coins extra" },
          { name: "Accesso anticipato alle nuove funzionalità del server" },
          { name: "Tag Hacked per 3 mesi", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Oggetti Esclusivi" },
          { name: "Accesso esclusivo a eventi futuri" },
          { name: "Eventi Privati" },
        ],
        buyNowHref: "https://buy.stripe.com/14keWYbbp6Ox3jG6oy"
      },
      {
        name: "9M coins",
        description: "Aumenta i tuoi coins di 9M!",
        price: 99.99,
        icon: "💰",
        benefits: [
          { name: "Bonus di 1M coins extra" },
          { name: "Accesso anticipato alle nuove funzionalità del server" },
          { name: "Tag Hacked per 6 mesi", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Oggetti Esclusivi" },
          { name: "Accesso esclusivo a eventi futuri" },
          { name: "Possibilità di partecipare a test delle nuove modalità" },
          { name: "Eventi Privati" },
        ],
        buyNowHref: "https://buy.stripe.com/8wM168cft7SB5rOeV5"
      },
      {
        name: "12M coins",
        description: "Aumenta i tuoi coins di 12M!",
        price: 109.99,
        icon: "💰",
        benefits: [
          { name: "Bonus di 1.5M coins extra" },
          { name: "Accesso anticipato alle nuove funzionalità del server" },
          { name: "Tag Hacked per 8 mesi", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Oggetti Esclusivi" },
          { name: "Accesso esclusivo a eventi futuri" },
          { name: "Invito a eventi segreti" },
        ],
        buyNowHref: "https://buy.stripe.com/14k024gvJ7SB8E028k"
      },
      {
        name: "15M coins",
        description: "Aumenta i tuoi coins di 15M!",
        price: 119.99,
        icon: "💰",
        benefits: [
          { name: "Bonus di 2M coins extra" },
          { name: "Accesso anticipato alle nuove funzionalità del server" },
          { name: "Tag Hacked per 1 anno", description: "Tag speciale visibile a tutti i giocatori" },
          { name: "Oggetti Esclusivi e Personalizzati" },
          { name: "Accesso a eventi speciali riservati" },
          { name: "Accesso primario a modalità di gioco nuove" }
        ],
        buyNowHref: "https://buy.stripe.com/5kA2acfrF5Ktg6s4gt"
      }
    ]
  }  
]

const calculateSavings = (coins: number, price: number) => {
  const baseRate = 1000 / 2.99 // coins per euro for the base package
  const actualRate = coins / price
  const savingsPercentage = Math.round((actualRate / baseRate - 1) * 100)
  return savingsPercentage > 0 ? savingsPercentage : 0
}

export default function Component() {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedItem, setSelectedItem] = useState(menuItems[0])
  const [selectedShopItem, setSelectedShopItem] = useState<ShopItem | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedBenefits, setExpandedBenefits] = useState<{ [key: string]: boolean }>({})

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

  const toggleBenefitExpansion = (benefitName: string) => {
    setExpandedBenefits(prev => ({
      ...prev,
      [benefitName]: !prev[benefitName]
    }))
  }

  return (
    <div className={`flex min-h-screen bg-gray-900 text-white ${roboto.className}`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isMobile ? 'w-full' : 'w-64'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
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
                  {selectedShopItem.benefits && selectedShopItem.benefits.length > 0 && (
                    <ul className="space-y-2">
                      {selectedShopItem.benefits.map((benefit, index) => (
                        <li key={index} className="flex flex-col">
                          <div className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                            <span className={`${lato.className} flex-grow`}>{benefit.name}</span>
                            {(benefit.description || benefit.subBenefits) && (
                              <button
                                onClick={() => toggleBenefitExpansion(benefit.name)}
                                className="ml-2 text-gray-400 hover:text-white"
                              >
                                {expandedBenefits[benefit.name] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>
                            )}
                          </div>
                          {expandedBenefits[benefit.name] && (
                            <div className="ml-6 mt-2 text-sm text-gray-400">
                              {benefit.description && <p>{benefit.description}</p>}
                              {benefit.subBenefits && (
                                <ul className="list-disc list-inside mt-1">
                                  {benefit.subBenefits.map((subBenefit, subIndex) => (
                                    <li key={subIndex}>{subBenefit}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
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
                {selectedItem.shopItems.map((item) => {
                  const coins = parseInt(item.name.split(' ')[0])
                  const savings = calculateSavings(coins, item.price)
                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedShopItem(item)}
                      className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors text-left flex flex-col items-center"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`text-2xl font-bold ${vt323.className}`}>{item.name}</h3>
                        {savings > 0 && (
                          <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1 text-sm font-medium bg-yellow-500 text-yellow-950">
                            <Coins className="w-4 h-4" />
                            Risparmia il {savings}%
                          </Badge>
                        )}
                      </div>
                      <p className={`text-sm text-gray-400 mb-4 ${lato.className}`}>{item.description}</p>
                      <p className={`text-lg font-bold ${vt323.className}`}>{item.price.toFixed(2)} EUR</p>
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}