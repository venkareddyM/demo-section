
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Register form</h1>
      <div className='form-group'>
        <div>
          <label>name</label>
          <input type='text' className='input-field' placeholder='Enter the your name'/>
        </div>

        <div>
          <label>password</label>
          <input type='password'className='input-field' placeholder='Enter the your password'/>
        </div>

        <div>
          <label>email</label>
          <input type='mail'className='input-field' placeholder='Enter the your mail'/>
        </div>

        <div className='main-buttons'>
          <button className='rest'>Reset</button>
          <button className='submit'>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default App;
