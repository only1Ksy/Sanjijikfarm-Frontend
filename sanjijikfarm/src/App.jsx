import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto h-full max-w-[var(--frame-width)] shadow">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
