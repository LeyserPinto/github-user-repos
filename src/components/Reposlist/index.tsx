import {useState,useEffect} from 'react'
import './Resposlist.css'

type Trepos = {
    reposUrl: string
}
const Reposlist = (props:Trepos) => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //useEffect
    useEffect(() => {
      fetch(props.reposUrl)
      .then(res => res.json())
      .then(data => {
        setTimeout(()=>{
            setRepos(data);
            setIsLoading(false);            
        },1500)
      })

    }, [])
    
    return (
        <>
            {isLoading ? (
                <h2>Is Loading...</h2>
            ): (
            <>    
                <h3>My Repositories</h3>
                <ul>
                    {repos.map(({id, full_name, language, description, html_url}) => (
                            <li key={id}>
                                <h2>{full_name}</h2>
                                <h4>{language}</h4>
                                <p>{description}</p>
                                <a href={html_url}>Go to Github</a>
                            </li>
                        ))}
                </ul>
            </>
            )}
        </>
    )
}

export default Reposlist