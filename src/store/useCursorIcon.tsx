import { create } from 'zustand'

type Props = {
  cursorIcon: any | null
  setCursorIcon: (img: any | null) => void
}

const useMenuItemsPrev = create<Props>(set => ({
  cursorIcon: null,
  setCursorIcon: img => set({ cursorIcon: img })
}))

export default useMenuItemsPrev
