import "./App.css";
import Header from "./components/hearder/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import FavouriteProvider from "./weatherProvider/FavouriteProvider";
import WeatherProvider from "./weatherProvider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </div>
    </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
