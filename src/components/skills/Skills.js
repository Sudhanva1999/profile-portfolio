import React, { useEffect, useState } from 'react';
import './Skills.css';
import flaskIcon from '../../resources/skillIcons/flaskicon.png'
import opencvIcon from '../../resources/skillIcons/opencvicon.png'
import servletIcon from '../../resources/skillIcons/javaservletsicon.png'
import electronIcon from '../../resources/skillIcons/electronicon.png'
import realtimeIcon from '../../resources/skillIcons/realtimeicon.png'
import splunkIcon from '../../resources/skillIcons/splunkicon.png'
import htmlicon from '../../resources/skillIcons/htmlicon.png'
import cssicon from '../../resources/skillIcons/cssicon.png'



const SkillItem = ({ skill, level }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setHovered(true);
    }, 100);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className={`skill-item`}>
      <div className="skill-name">{skill}</div>
      <div className="skill-level">
        <div className="skill-fill" style={{ width: `${hovered ? level : 0}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className='bodyContainerSkills'>
      <div className="skills-container ">
        <h1>Skills</h1>
        <div className="skills-list">
          <div className="skills-category fromLeft">
            <h2>Languages</h2>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo" />
              <SkillItem skill="C++" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1" />
              <SkillItem skill="Java" level={90} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1" />
              <SkillItem skill="Python" level={75} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/php.png" alt="php" />
              <SkillItem skill="PHP" level={60} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
              <SkillItem skill="Javascript" level={70} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src={htmlicon} alt="htmlicon" />
              <SkillItem skill="HTML" level={90} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src={cssicon} alt="cssicon" />
              <SkillItem skill="CSS" level={90} />
            </div>
          </div>

          <div className="skills-category fromRight">
            <h2>Frameworks</h2>
            <div className='iconContainer'>
              <img className='skillIcon' width="100" height="100" src="https://img.icons8.com/plasticine/100/react.png" alt="react" />
              <SkillItem skill="ReactJS" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/fluency/48/angularjs.png" alt="angularjs" />
              <SkillItem skill="AngularJS" level={60} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" />
              <SkillItem skill="NodeJS" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src={electronIcon} alt="electronIcon" />
              <SkillItem skill="ElectronJS" level={70} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="100" height="100" src="https://img.icons8.com/plasticine/100/python.png" alt="python" />
              <SkillItem skill="Tickenter" level={60} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src={flaskIcon} alt="flaskIcon" />
              <SkillItem skill="Flask" level={70} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src={servletIcon} alt="servletIcon" />
              <SkillItem skill="Java Servlets" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/spring-logo.png" alt="spring-logo" />
              <SkillItem skill="Spring Boot" level={80} />
            </div>
          </div>

          <div className="skills-category fromLeft">
            <h2>Databases</h2>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/my-sql.png" alt="my-sql" />
              <SkillItem skill="MySQL" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="100" height="100" src="https://img.icons8.com/plasticine/100/oracle-pl-sql--v3.png" alt="oracle-pl-sql--v3" />
              <SkillItem skill="Oracle" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="64" height="64" src="https://img.icons8.com/nolan/64/mongo-db.png" alt="mongo-db" />
              <SkillItem skill="MongoDB" level={60} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/cloud-firestore.png" alt="cloud-firestore" />
              <SkillItem skill="Google Firestore" level={60} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src={realtimeIcon} alt="flaskIcon" />
              <SkillItem skill="Google Realtime" level={60} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="64" height="64" src="https://img.icons8.com/nolan/64/amazon-s3.png" alt="amazon-s3" />
              <SkillItem skill="Amazon S3" level={60} />
            </div>
          </div>

          <div className="skills-category fromRight">
            <h2>Other</h2>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/fluency/48/sprint-iteration.png" alt="sprint-iteration" />
              <SkillItem skill="Agile Development" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="64" height="64" src="https://img.icons8.com/external-others-iconmarket/64/external-jsp-file-types-others-iconmarket.png" alt="external-jsp-file-types-others-iconmarket" />
              <SkillItem skill="JSP" level={75} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="25" height="25" src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/25/external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-duo-tal-revivo.png" alt="external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-duo-tal-revivo" />
              <SkillItem skill="AWS" level={70} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/jira.png" alt="jira" />
              <SkillItem skill="Jira" level={75} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />
              <SkillItem skill="Git" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="50" height="50" src="https://img.icons8.com/water-color/50/maven-ios.png" alt="maven-ios" />
              <SkillItem skill="Maven" level={70} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon roundIcon' width="48" height="48" src={splunkIcon} alt="splunkIcon" />
              <SkillItem skill="Splunk" level={65} />
            </div>
            <div className='iconContainer'>
              <img className='skillIcon' width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2" />
              <SkillItem skill="Bootstrap" level={80} />
            </div>
            <div className='iconContainer'>
              <img className='roundIcon skillIcon' width="48" height="48" src={opencvIcon} alt="opencvIcon" />
              <SkillItem skill="OpenCV" level={60} />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Skills;
