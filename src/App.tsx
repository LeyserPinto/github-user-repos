import {useState, useEffect} from 'react'
import Account from './components/Account'
import Userform from './components/Userform'
import Reposlist from './components/Reposlist'
import './App.css'

//Aula 6:
function App() {  
  const [githubUser, setGithubUser] = useState('');
  const [searchError, setSearchError] = useState(false);
  const [userEndpoint, setUserEndpoint] = useState({
    id:"",
    avatar_url: "",
    name: "",
    bio: "",
    repos_url:""

  });

  //Use effects
  useEffect(()=> {
    setSearchError(false);    
    if(githubUser.length >= 4) {
      fetch(`https://api.github.com/users/${githubUser}`)
      .then((res) => {        
          if(res.ok) {
            return res.json()
          } 
          throw new Error("A erro " + res.status)
        })
      .then(data => setUserEndpoint(data))
      .catch(()=>setSearchError(true))
    }
  }, [githubUser])


  return (
    <>
      <Userform setGithubUser={setGithubUser} searchError={searchError} />
      {searchError == false && userEndpoint.id.length > 0 && (
        <>
          <Account userAvatar={userEndpoint.avatar_url} userName={userEndpoint.name} userBio={userEndpoint.bio}/>
          <Reposlist reposUrl={userEndpoint.repos_url}/>        
        </>
      )}  
    </>
  )
}

export default App
