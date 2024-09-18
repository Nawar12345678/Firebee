import './App.css';
import ImageOverlay from './component/ImageOverlay/ImageOverlay';
import Navbar from './component/Navbar/Navbar';
import ProductDisplay1 from './component/ProductDisplay/ProductDisplay1';
import TextWithImage from './component/TextWithImage/TextWithImage';
import days from './assets/30days.png';
import FirebeeSignalGrid from './component/FirebeeSignalGrid/FirebeeSignalGrid';
import Question from './component/Question/Question';
import Box from './component/Box/Box';
import FAQ from './component/FAQ/FAQ';
import Footer from './component/Footer/Footer';

function App() {
  const questionsAndAnswers = [
    {
      question: "Is Firebee Safe?",
      answer: "Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for human use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety."
    },
    {
      question: "How Does Firebee work?",
      answer: "Firebee uses ultra-low energy magnetic signals to gently nudge you into a different mental state.\n\nEvery Firebee signal is made by studying real-world magnetic signatures. Did you know caffeine has a unique one-of-a-kind magnetic signature? It is scientifically understood that every substance on earth actually has a unique magnetic signature.\n\nFirebee uses patented technology that is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize."
    },
    {
      question: "Will Firebee Fit on My Head?",
      answer: "Firebee has a fully adjustable headband so you can adjust it for comfortability and snug on your head."
    },
    {
      question: "What if I want the signal to stop?",
      answer: "Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes."
    },
    {
      question: "How do you charge Firebee?",
      answer: "Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in."
    }
  ];
  
  return (
    <div>
      <ImageOverlay />
      <Navbar />
      <ProductDisplay1 />

      <TextWithImage
       text1="30 Day Money Back Guarantee "
        text2=" At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason if you are not satisfied with your Firebee headband we will happily refund your purchase  " 
        imageSrc={days} 
        altText=''
      />

<FirebeeSignalGrid />
<Question />
<Box />
<FAQ questionsAndAnswers={questionsAndAnswers} />      
<Footer />
    </div> 

   
  )
}

export default App;
/* image 17 

position: absolute;
width: 692px;
height: 74px;
left: 906px;
top: 0px;

background: url(image.png);

*/