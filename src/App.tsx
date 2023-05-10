import './App.css';
import Container from './components/Container';
import Events from './components/Events';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';

function App() {
 
   const personName = {
      firstName : 'Parimal',
      lastName : 'Tank',
   }  

   const personList = [
      {
         first : 'Parimal',
         last : 'Tank'
      },
      {
         first: 'Dhrumil',
         last : 'Amrutiya'
      },
      {
         first: 'Kartik',
         last: 'Rana'
      },
      {
         first: 'Jaydeep',
         last: 'Patel'
      }
   ]
   
  return (
    <div className="App">

        <LoggedIn />
        <br />

        <User />
        <br />

        <Counter />

       {/* Example of Passing a Props */}
       <Greet name='Parimal' messageCount={10} isLogin={false} />

       {/* Pass Object into a Component Example */}
       <Person name={personName} />

       {/* Example of Passing a Array of Object into a Components */}
       <PersonList names={personList} />

       <Status status='success' />

       <Heading>PlaceHolder Text</Heading>

       {/* Example of Passing the text one Component to Children Components */}
       <Oscar><Heading>Oscar Goes to Leonardo Dicpario!</Heading></Oscar>

       <Events handleClick={ (event , id) => {
           console.log('button Click',event)
       }} />

       <Input value='' handleChange={(event) => console.log(event)} />

       {/* Passing the Specific Style to The Component */}
       <Container  style={{ border: '1px solid black' , padding  : '1rem' }} />

    </div>
  );
}

export default App;
