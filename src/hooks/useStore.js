//Installerat zustand
import data from '../data/data.json'
import create from 'zustand'
//Skapar globalstore
const useStore = create((set, get) => ({
  userName: '',
  setUserName: (name) => set({ userName: name }),
  //hämtar nuvarande fråga
  questions: data,
  currentQuestionIndex: 0,
}))

export default useStore
