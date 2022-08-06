export const reformatTime = (durationInMinute) => {
  const hour = Math.trunc(durationInMinute / 60);
  const min = durationInMinute % 60;
  return hour ? `${hour}ч ${min}м` : `${min} мин`;
};
