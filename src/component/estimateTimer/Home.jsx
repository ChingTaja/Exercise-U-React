import Player from './Player';

export default function Home() {
  return (
    <>
      <div id="content">
        <header>
          <h1>
            The <em>Almost</em> Final Countdown
          </h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>

        <Player />
        <div id="challenges"></div>
      </div>
    </>
  );
}
