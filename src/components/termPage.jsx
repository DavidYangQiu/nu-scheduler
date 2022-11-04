import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";
import { useState } from "react";

import Banner from './banner';
import CourseList from './CourseList';
import ModalSelected from './modalSelected';

const terms = {
  Fall: "Fall",
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off" onChange={() => setSelection(term)} />
    <label className="btn btn-success m-1 p-2" htmlFor={term}>
      { term }
    </label>
  </div>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    {
      Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const Course = ({courseList, selection, toggleSelected, profile}) => {
  const [user] = useAuthState();
	const isAuthenticated = user !== null;

  return (<CourseList courses={Object.fromEntries(courseList)}
                      selected={selection}
                      toggleSelected={toggleSelected}
                      editable={profile?.isAdmin} />);
};

const TermPage = ({title, courses, profile}) => {
  const [term, setTerm] = useState('Fall');
  const [openSelected, setOpenSelected] = useState(false);

  const [selected, setSelected] = useState([]);

  const toggleSelected = item => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  const filtered = Object.entries(courses).filter(e => e[1].term === term);
  const selectedObjs = Object.entries(courses).filter(e => selected.includes(e[0]));

  const openSelectedModal = () => setOpenSelected(true);
  const closeSelectedModal = () => setOpenSelected(false);

  return (
    <div>
      <Banner title={title} />
      <div className="d-flex">
        <TermSelector selection={term} setSelection={setTerm} />

        <button type="button" className="ms-auto btn btn-succes " onClick={() => signInWithGoogle()}>Log In</button>
				<button type="button" className="ms-auto btn btn-succes " onClick={() => signOut()}>Log Out</button> 
        <button type="button" className="ms-auto btn btn-succes " onClick={openSelectedModal}>
          course plan
        </button>
      </div>
      <Course courseList={filtered} selection={selected} toggleSelected={toggleSelected} profile={profile}/>
      <ModalSelected selection={selectedObjs} open={openSelected} close={closeSelectedModal}/>
    </div>
  );
}

export default TermPage;