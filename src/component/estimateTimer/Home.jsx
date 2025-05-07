import Player from './Player';
import TimeChallenge from './TimeChallenge';

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
        <div id="challenges">
          <TimeChallenge title="Easy" targetTime={1} />
          <TimeChallenge title="Not easy" targetTime={5} />
          <TimeChallenge title="Getting tough" targetTime={10} />
          <TimeChallenge title="Pros only" targetTime={15} />
        </div>
      </div>
    </>
  );
}
