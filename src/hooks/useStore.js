//Installerat zustand
import create from 'zustand'
//Skapar globalstore
const useStore = create((set) => ({
  userName: '',
  setUserName: (name) => set({ userName: name }),
}))

export default useStore
