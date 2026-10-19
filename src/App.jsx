import AppRoutes from './Routes';

import TopStripe from './pages/components/Banner'

function App() {
  return (
    <div className="App" style={{ paddingTop: "72px" }}>
      <TopStripe text="⚠️ Heads up [PC]: Using Nexus Anima launcher may render the link unusable. Opening HoYoPlay will fix the issue. If you have the Petit Planet Beta Launcher, the test has close. Please uninstall the Launcher." />
      <AppRoutes />
    </div>
  );
}

export default App;
