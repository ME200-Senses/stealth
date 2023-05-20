import './file.css'
import SideNav from '../sideNav/sideNav.jsx';
import NavBar from '../navBar/navBar';
import FileMain from '../fileMain/fileMain';
const file = () => {
  return (
    <div className='body'>
      <SideNav/>
      <div className="sidemain">
      <NavBar></NavBar>
      <FileMain></FileMain>
      </div>
    </div>
  )
}

export default file
