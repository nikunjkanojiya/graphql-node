
import './App.css';
import {gql, useQuery} from '@apollo/client';

const query = gql`
  query GetTodoWithUser {
    getTodos {
      title
      completed
        user {
          name
        }
      }
    }
`


function App() {
  const {data,error, loading} = useQuery(query)
  console.log('dta', data);
  console.log('s', error);
  if(loading) return <h1>Loading...</h1>
  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
