// react
import * as React from 'react';
// @mui
import { Box, Container, Icon, Typography } from '@mui/material';
// custom component
import SkillProgress from 'components/common/SkillProgress';
// custom icons
import IllustratorCCIcon from 'components/icon/IllustratorCC';
import LightroomCCIcon from 'components/icon/LightroomCC';
import PhotoshopIcon from 'components/icon/Photoshop';
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Photoshop',
      progressValue: 78,
    },
    {
      Icon: (
        <LightroomCCIcon bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: 'Lightroom',
      progressValue: 83,
    },
    {
      Icon: (
        <IllustratorCCIcon
          bgColor="white"
          textColor="tomato"
          fontSize="large"
        />
      ),
      title: 'Illustrator',
      progressValue: 97,
    },
  ];

  return (
    <>
      <Container
        id="skills"
        maxWidth={containerMaxWidth}
        sx={{ marginTop: '5rem', marginBottom: '5rem' }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="primary"
          textAlign="center"
        >
          My Skills
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          {skills.map((skill, index) => (
            <SkillProgress
              size={100}
              value={skill.progressValue}
              Icon={skill.Icon}
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              subtitle={`${skill.title} | ${skill.progressValue}%`}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Skills;
