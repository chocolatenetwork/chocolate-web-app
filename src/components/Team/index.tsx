import React, { useState } from "react";
import ChocolateRedSmall from "../../assets/chocolate-red-small.svg";

/**
 *
 * @description Renders a memberview
 * @type {React.FC<{name:string;image:string;socials:object}>}
 */
const Member: React.FC<{ name: string; image: string; socials: object }> = function (props) {
  const { image, name, socials } = props;
  return (
    <article>
      <figure>
        <img src={image} alt='' />
        <figcaption>{name}</figcaption>
      </figure>
      {/* title here */}
      <span>{/* Render Socials*/}</span>
    </article>
  );
};

/**@type {React.FC}*/
const TeamList: React.FC = function () {
  const [team, setTeam] = useState<object[]>([]);
  // fetch team from git - do this lazily on app instantiation.
  // teamlist.mapeach to img,name,title
  //@ts-expect-error - fill in members from fetch team
  const renderTeam = team.map((member) => <Member {...member} />);
  return <section>{renderTeam}</section>;
};

/**
 * @description  The team page
 *
 */
const Team = function () {
  return (
    <article>
      <h1>Meet our Team</h1>
      <TeamList />
      <p>
        <b className='highlight-team'>I</b>ntegrity <b className='highlight-team'>D</b>iscipline{" "}
        <b className='highlight-team'>E</b>fficiency <b className='highlight-team'>A</b>daptability
      </p>
      <p>
        Team {<img src={ChocolateRedSmall} alt='chocolate-emoji' />} is a meritocracy. No space for big egos here, only
        big dreams.
      </p>
    </article>
  );
};

export default Team;
