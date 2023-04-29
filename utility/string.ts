export const clipLongString = (string: string) => {
  return `${string.substring(0, 4)}...${string.substring(string.length - 4)}`;
};
