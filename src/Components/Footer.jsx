import { Link } from 'react-scroll'

export default function Footer(){
    return(
        <footer className="text-center p-1">
           <p>Designed and Coded with <span style={{color: 'red', fontSize: '1.2rem'}}>
                <i className="im im-heart px-1" aria-label="heart"></i>
                </span> by Adhitya Raj (Me!)
                <br />
                <Link to="home" className="link">Go to top</Link>
            </p> 
        </footer>
    )
}