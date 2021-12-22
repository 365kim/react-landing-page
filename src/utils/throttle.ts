export const throttle = (callback: () => void, ms: number) => {
  let timerId: ReturnType<typeof setTimeout> | null;

  return (...arg: any) => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      callback.apply(null, arg);
      timerId = null;
    }, ms);
  };
};
