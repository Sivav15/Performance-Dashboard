import { useState, useCallback } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingModal {
  showLoading: () => void;
  hideLoading: () => void;
  LoadingModalComponent: React.FC;
}

const useLoadingModal = (): LoadingModal => {
  const [loading, setLoading] = useState<boolean>(false);

  const showLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const LoadingModalComponent: React.FC = useCallback(
    () => (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        transitionDuration={500}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    ),
    [loading]
  );

  return { showLoading, hideLoading, LoadingModalComponent };
};

export default useLoadingModal;
