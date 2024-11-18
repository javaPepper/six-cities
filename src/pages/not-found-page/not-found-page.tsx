import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to='/six-cities'>Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
