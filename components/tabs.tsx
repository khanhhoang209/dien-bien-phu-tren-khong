'use client'

import { useState } from 'react'
import { Hero } from '@/components/hero'
import { Context } from '@/components/context'
import { Timeline } from '@/components/timeline'
import { Heroes } from '@/components/heroes'
import { Results } from '@/components/results'
import { Phases } from '@/components/phases'
import { About } from '@/components/about'
import { Quiz } from '@/components/quiz'
import { BattleBackground } from '@/components/battle-background'

type TabType = 'overview' | 'phases' | 'about' | 'quiz'

export function Tabs() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'overview', label: 'Tổng Quan', icon: '🏛️' },
    { id: 'phases', label: 'Các Giai Đoạn', icon: '📅' },
    { id: 'about', label: 'Về Chúng Tôi', icon: 'ℹ️' },
    { id: 'quiz', label: 'Quiz', icon: '❓' },
  ]

  return (
    <div className="w-full relative">
      {/* Battle background animation - Full page */}
      <BattleBackground />

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto overflow-y-hidden overscroll-y-none no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 font-semibold text-lg transition-all whitespace-nowrap relative group ${
                  activeTab === tab.id
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}

                {/* Active indicator - Bottom border */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-t-lg"></div>
                )}

                {/* Hover effect */}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/30 group-hover:h-1 transition-all rounded-t-lg opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full relative z-20">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="animate-in fade-in duration-500">
            <Hero />
            <Context />
            <Timeline />
            <Heroes />
            <Results />
          </div>
        )}

        {/* Phases Tab */}
        {activeTab === 'phases' && (
          <div className="animate-in fade-in duration-500">
            <div className="py-16 px-4 bg-background">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl font-bold text-center mb-4">
                  <span className="text-accent">GIAI ĐOẠN</span> CHIẾN DỊCH
                </h1>
                <div className="h-1 w-32 bg-accent mx-auto mb-8"></div>
              </div>
            </div>
            <Phases />
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-500">
            <div className="py-16 px-4 bg-background">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl font-bold text-center mb-4">
                  <span className="text-accent">THÔNG TIN</span> TRANG WEB
                </h1>
                <div className="h-1 w-32 bg-accent mx-auto mb-8"></div>
              </div>
            </div>
            <About />
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="animate-in fade-in duration-500">
            <div className="py-16 px-4 bg-background">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl font-bold text-center mb-4">
                  <span className="text-accent">QUIZ</span>
                </h1>
                <div className="h-1 w-32 bg-accent mx-auto mb-8"></div>
              </div>
            </div>
            <Quiz />
          </div>
        )}
      </div>
    </div>
  )
}
