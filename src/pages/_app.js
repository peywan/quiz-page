import "@/styles/globals.css";
//import { QuizProvider } from '/context/QuizContext';

export default function App({ Component, pageProps }) {
  return (
    //<QuizProvider>
    <Component {...pageProps} />
    //</QuizProvider>
  );
}
