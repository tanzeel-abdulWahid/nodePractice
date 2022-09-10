import { useEffect,useState } from 'react';
import memories from './assets/memories.png'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {useGetPostsQuery} from './services/travelApi';
function App() {
  const [currentId, setCurrentId] = useState(0);
  console.log({currentId});
  const {
    data: posts,
    isSuccess,
    isError,
    isLoading,
  } = useGetPostsQuery(currentId);


  useEffect(() => {
  },[])

  return (
    <div className="md:max-w-6xl mx-auto">
      <header className="p-2 rounded-3xl my-8 flex flex-row justify-center items-center bg-white">
        <h2 className="align-center sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500 mr-4">
          Travel memories
        </h2>
        <img className="h-16" src={memories} alt="icon" />
      </header>

      <div className="container grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-1  gap-9">
        <div className="col-span-2">
          <Posts
            posts={posts}
            isSuccess={isSuccess}
            isError={isError}
            isLoading={isLoading}
            setCurrentId={setCurrentId}
          />
        </div>
        <div className="grid grid-col-1">
          <Form currentId={currentId} setCurrentId={setCurrentId} posts={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App
