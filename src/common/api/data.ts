// This function will return the data from the API
export const getData = async (): Promise<Record<string, any>> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};
