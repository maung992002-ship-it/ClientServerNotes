import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NoteList from './Components/NoteList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <NoteList/>
  </StrictMode>,
)
