export const throttle = (ms: number) => {
  let timerId: NodeJS.Timer | null;

  return (callback: () => void) => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, ms);
  };
};
