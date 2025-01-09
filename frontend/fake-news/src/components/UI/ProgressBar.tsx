import React, { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";
import fakeNewsStore from "../../stores/FakeNewsStore";

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledLinearProgress = styled(LinearProgress)`
  && {
    height: 10px;
    background-color: #ddd;
    & .MuiLinearProgress-bar {
      background-color: rgb(239, 12, 12);
    }
  }
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalArticles = fakeNewsStore.fakeNews.length;
      if (totalArticles > 0) {
        setProgress(Math.floor((fakeNewsStore.step / totalArticles) * 100));
      }
    };
    const interval = setInterval(updateProgress, 200);

    return () => {
      clearInterval(interval);
    };
  }, [fakeNewsStore.fakeNews.length, fakeNewsStore.step]);

  return (
    <ProgressContainer>
      {progress < 100 && (
        <StyledLinearProgress variant="determinate" value={progress} />
      )}
    </ProgressContainer>
  );
};

export default ProgressBar;
