import Gap from 'components/Gap'
import Header from 'components/Header'
import { STRINGS_EN } from 'constants/string'
import QuestionPage from 'pages/Question'
import ResultPage from 'pages/Result'
import 'rc-slider/assets/index.css'
import './App.css'

function App() {

  	return (
		<div className="App">
			<Header title={STRINGS_EN.TITLE} />
			<main>
				<QuestionPage />
				<Gap height={100} />
				<ResultPage />
				<Gap height={200} />
			</main>
		</div >
  	)
}

export default App;
