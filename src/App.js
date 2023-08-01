import './App.css';
import FeatureBox from './FeatureBox.js'
import img_1 from './Assets/img_1.png';
import img_2 from './Assets/img_2.png';
import img_3 from './Assets/img_3.png';
import img_4 from './Assets/img_4.png';
import img_5 from './Assets/img_5.png';

function App() {
  return (
    <div className="container-fluid">
      <div className='row p-0'>
        <div className='col-6 px-5 pb-0 pt-4'>
          <h1 className='main-title'>Why The Industry<br /> Chooses Clickdee?</h1>
          <p className='pt-4 main-title-description'>We understand performance marketing from every angle and every stage of funnel.Our clients trust that we know what metrics move their business towards frowth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.</p>
        </div>
        <div className='col-6'>
          <div className='row'>
            <FeatureBox blue={true} img={img_1} title='Choose Your Local Targeting' description='Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.' />
            <FeatureBox blue={false} img={img_2} title='Track Your Conversion' description='We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated' />
          </div>
        </div>
      </div>
      <div className='row p-0'>
        <div className='col-6'>
          <div className='row'>
            <div className='offset-6'></div>
            <FeatureBox blue={true} img={img_3} title='Customized Campaigns' description="Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest." />
          </div>
        </div>
        <div className='col-6'>
          <div className='row'>
            <FeatureBox blue={false} img={img_4} title='Get Dedicated Support Team' description='We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.' />
            <FeatureBox blue={true} img={img_5} title='Quality Assurance' description='We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
