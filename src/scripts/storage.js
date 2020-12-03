const load = key => {
  try {
    const getStorage = localStorage.getItem(key);

    return getStorage ? getStorage : null;
  } catch (err) {
    console.error('Get localStorage error: ', err);
  }
};

const save = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.error('Set localStorage error: ', err);
  }
};

export { load, save };
