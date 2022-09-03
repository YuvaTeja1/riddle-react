
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <img className='logoridd' src='https://mpng.subpng.com/20180409/qzw/kisspng-moon-lunar-phase-symbol-computer-icons-star-and-cr-moon-5acc159d20a779.2274650615233243171338.jpg' alt='moon' />
        <h3 className='riddleHead'>riddle</h3>
      </div>
      <div  className='block'>
        <div>
          <input className='inputbox' type='text' />
        </div><hr/>
        <div>
          <div className='dottech'>
              <img src='https://i.pinimg.com/originals/db/7a/ff/db7aff48113e9d40f144d078a82feea4.png' alt='logo1' className='Coverimage'/>
              <h3>Dots Tech
              <p>Software Company 4140-likes 1550-follows</p>
              </h3>
          </div>
          <br/>
          <div className='dottech'>
              <img src='https://dcassetcdn.com/design_img/37744/18028/18028_711169_37744_image.jpg' alt='logo2' className='Coverimage'/>
              <h3>Random Order
              <p>Software Solutions 1150-likes 730-follows</p>
              </h3>
          </div>
        </div>

        <div>
        <div className='block-2'>
          <input className='inputbox-2' type='text' /><hr/>
          <div className='dottech'>
              <img src='https://i.pinimg.com/originals/2c/42/bc/2c42bc75e7f07f3561e0b5160ecc98d6.png' alt='logo3' className='Coverimage'/>
              <h3>Core City
              <p>Movie Company 3140-likes 650-follows</p>
              </h3>
          </div>
        </div>
        </div>
      </div>
      <div className='para-block'>
            <h2 className='head-2'>Build The Community<br/>Your Fans Will Love</h2>
            <p className='para-2'>Riddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discuss.</p>
            <button className='button-1'>Register</button>
          </div>
    </div>
  );
}

export default App;
