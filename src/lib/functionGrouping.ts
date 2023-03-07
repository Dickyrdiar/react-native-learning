export const groupedData = (data: any) => {
  const result = data.reduce((acc: any, curr: any) => {
    curr.tags.forEach((tag: any) => {
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push(curr);
    });
    return acc;
  });

  return result;
};
