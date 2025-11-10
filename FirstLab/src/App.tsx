import './App.css'
import { Movies } from './Movies'

function App() {
  

  return (
    <>
      <header>
        <nav>
          <a>Sun</a> |
          <a>Mon</a> |
          <a>Tue</a> |
          <a>Wed</a> |
          <a>Thu</a> |
          <a>Fri</a> |
          <a>Sat</a> |
        </nav>
      </header>

      <main>
        <Movies />
      </main>

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default App
