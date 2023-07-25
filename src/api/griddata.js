const griddata = async () => {
  const url = import.meta.env.VITE_REACT_APP_MY_API;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

export default griddata;
