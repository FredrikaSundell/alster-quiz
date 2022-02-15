//Installerat zustand
import data from '../data/data.json'
import create from 'zustand'
//Skapar globalstore
const useStore = create((set, get) => ({
  userName: '',
  setUserName: (name) => set({ userName: name }),
  //hämtar nuvarande fråga
  questions: data.map((q) => ({
    ...q,
    answer: null,
  })),
  currentQuestionId: data[0].id,
  setAnswer: (answer) =>
    set((state) => {
      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id === state.currentQuestionId) {
            return { ...q, answer: answer }
          }

          return q
        }),
      }
    }),
  setNextQuestion: () =>
    set((state) => {
      const currentIndex = state.questions.findIndex(
        (q) => q.id === state.currentQuestionId
      )
      console.log(currentIndex)
      const nextQuestion = state.questions[currentIndex + 1]
      return {
        ...state,
        currentQuestionId: nextQuestion
          ? nextQuestion.id
          : state.currentQuestionId,
      }
    }),
}))

export default useStore
