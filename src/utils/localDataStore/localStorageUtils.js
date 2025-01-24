export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return undefined;

    const parsedState = JSON.parse(serializedState);
    if (key === 'loggedInState' && typeof parsedState !== 'object') {
      return { isLoggedIn: false };
    }

    return parsedState;
  } catch (error) {
    console.error("Error loading state for key", key, ":", error);
    return undefined;
  }
};


export const saveState = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving state for key", key, ":", error);
  }
};

