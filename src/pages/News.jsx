
import { useParams } from 'react-router-dom';

function News() {
  const { id } = useParams();


  return (
    <div>
      <h1>News Item</h1>
      <p>This is news item with id: {id}</p>
    </div>
  );
}

export default News;