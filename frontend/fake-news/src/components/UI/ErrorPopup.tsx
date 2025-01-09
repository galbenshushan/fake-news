import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import fakeNewsStore from "../../stores/FakeNewsStore";
import { observer } from "mobx-react-lite";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  textTransform: "none",
});

const ErrorPopup: React.FC = observer(() => {
  return (
    <Dialog
      open={!!fakeNewsStore.error}
      onClose={() => fakeNewsStore.setError(null)}
      fullWidth
    >
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <Typography variant="body1" color="textSecondary">
          {fakeNewsStore.error}
        </Typography>
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={() => fakeNewsStore.setError(null)}>
          Close
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
});

export default ErrorPopup;
