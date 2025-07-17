import React from 'react'
import { useThemStore } from '../store/useThemeStore'
import { THEMES } from '../constants'

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey ! How its going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on thesome new features", isSent: true }
]

function Settings() {
  const { theme, setTheme } = useThemStore()
  return (
    <div className='h-screen container mx-auto px-4 pt-20 max-w-5xl'>
      <div className='space-y-6'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-lg font-semibold'>
            theme
          </h2>
          <p className='text-sm text-base-content/70 '>
            Choose a Theme for your chat Interface
          </p>
        </div>

        <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2'>
          {THEMES.map((theme) => (
            <button
              key={theme}
              className={`group  flex flex-col  items-center gap-1.5 p-2  rounded-lg transition-colors
                ${theme === theme ? "bg-base-200 " : "hover:bg-base-200/50 "} `}
              onClick={() => { setTheme(theme) }}
            >
              <div className='realative h-8 w-full rounded-md overflow-hidden' data-theme={theme}>
                <div className='absolute inset-0 grid grid-cols-4 gap-px p-2  '>
                  <div className='rounded bg-primary'></div>
                  <div className='rounded bg-secondary'></div>
                  <div className='rounded bg-accent'></div>
                  <div className='rounded bg-neutral'></div>
                </div>
              </div>
              <span className='text-[11px] font-medium truncate w-full  text-center'>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Settings