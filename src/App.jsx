import "./App.css";
import Header from "./components/hearder/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import WeatherProvider from "./weatherProvider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </div>
    </WeatherProvider>
  );
}

export default App;
