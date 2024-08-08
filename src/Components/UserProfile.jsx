import 'bootstrap/dist/css/bootstrap.css'; 
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

function UserProfile() {
  return (
    <div className="home-container">
    <header className="home-header">
      <h1>Welcome to EvidMentor</h1>
      <h6>Evidence-based approach to mentoring and coaching.</h6>
    </header>
    <nav className="home-nav">
      <ul className="home-nav-list">
        <li className="home-nav-item">
          <Link to="/login" className="home-nav-link">My Profile</Link>
        </li>
        <li className="home-nav-item">
          <Link to="/login" className="home-nav-link">Organization</Link>
        </li>
        <li className="home-nav-item">
          <Link to="/register" className="home-nav-link">Dashboard</Link>
        </li>
        <li className="home-nav-item">
          <Link to="/register" className="home-nav-link">Mentor - Mentees</Link>
        </li>
        <li className="home-nav-item">
          <Link to="/register" className="home-nav-link">Task Tracker</Link>
        </li>
      </ul>
    </nav>
        <form>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" id="inputPassword3" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" id="inputPassword3" />
                </div>
            </div>
            <div className="form-check col-sm-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                </label>
            </div>
            <div className="form-check col-sm-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                </label>
            </div>
            <div className="form-check col-sm-2">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Others
                </label>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Country</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" id="inputPassword3" />
                </div>
            </div>
        </form>
    </div>
    );
}
export default UserProfile;