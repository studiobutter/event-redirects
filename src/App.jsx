import AppRoutes from './Routes';

import TopStripe from './pages/components/Banner'

function App() {
  return (
    <div className="App" style={{ paddingTop: "56px" }}>
      <TopStripe text="⚠️ Heads up: Using Nexus Anima and Planet Petit beta launcher may render the link unusable. Opening HoYoPlay will fix the issue." />
      <AppRoutes />
    </div>
  );
}

export default App;
