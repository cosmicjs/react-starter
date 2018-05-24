import { Link } from '../routes'
export default () => 
	<ul>
		<li><Link route="/"><a>Home</a></Link></li>
		<li><Link route="/about"><a>About</a></Link></li>
		<li><Link route="/contact"><a>Contact</a></Link></li>
		<li><Link route="/not-found"><a>Not found</a></Link></li>
	</ul>