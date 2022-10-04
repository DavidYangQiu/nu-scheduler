
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useJsonQuery } from './utilities/fetch'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query';


// Display Current Time 
// const App = () => {
//   const today = new Date();
//   const day = today.toLocaleString([], {weekday: 'long'});
//   const date = today.toLocaleDateString([], {dateStyle: 'long'})

//   return (
//     <div>
//       <h1>Sample React code</h1>
//       Dispaly Current Thit ime
//       <p>Today is {day}, {date}.</p>
//     </div>
//   );
// };


// const schedule = {
//   "title": "CS Courses for 2018-2019",
//   "courses": {
//     "F101" : {
//       "term": "Fall",
//       "number": "101",
//       "meets" : "MWF 11:00-11:50",
//       "title" : "Computer Science: Concepts, Philosophy, and Connections"
//     },
//     "F110" : {
//       "term": "Fall",
//       "number": "110",
//       "meets" : "MWF 10:00-10:50",
//       "title" : "Intro Programming for non-majors"
//     },
//     "S313" : {
//       "term": "Spring",
//       "number": "313",
//       "meets" : "TuTh 15:30-16:50",
//       "title" : "Tangible Interaction Design and Learning"
//     },
//     "S314" : {
//       "term": "Spring",
//       "number": "314",
//       "meets" : "TuTh 9:30-10:50",
//       "title" : "Tech & Human Interaction"
//     }
//   }
// };


// const App = () => (
//   <div>
//     <h1>{schedule.title}</h1>
//     <Banner text={schedule.title}/> 
//     <CourseList courses={schedule.courses}/>
//   </div>
// );


const queryClient = new QueryClient();

const Main = () => {
  const [schedule, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!schedule) return <h1>No user data found</h1>;

  return (
    <div className="container">
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main/>
    </QueryClientProvider>
  );
};

export default App;