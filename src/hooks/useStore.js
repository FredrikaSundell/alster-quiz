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
  //lägger till "answer" på state på nuvarande fråga
  setAnswer: (answer) =>
    set((state) => {
      //retunerar nytt state
      return {
        //tar state som det är
        ...state,
        //skriv över questions med ny array. map loopar igenom alla frågor, döpta till q
        questions: state.questions.map((q) => {
          //har de samma id, sätt answer
          if (q.id === state.currentQuestionId) {
            return { ...q, answer: answer }
          }
          //annars retunera fråga som den är
          return q
        }),
      }
    }),
  setNextQuestion: () =>
    set((state) => {
      //hitta nuvarande fråge Index
      const currentIndex = state.questions.findIndex(
        (q) => q.id === state.currentQuestionId
      )
      console.log(currentIndex)
      //ta nuvarande index +1 för nästa fråga
      const nextQuestion = state.questions[currentIndex + 1]
      return {
        //ta state som det är
        ...state,
        currentQuestionId: nextQuestion
          ? //finns nästa fråga, sätt nuvarande frågas id till nästa frågas id
            nextQuestion.id
          : //om inte, sätt nuvarande frågas id till det den redan va(stannar på sista frågan)
            state.currentQuestionId,
      }
    }),
}))

export default useStore
