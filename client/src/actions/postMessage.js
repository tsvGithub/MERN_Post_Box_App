export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};
export const fetchAll = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPES_FETCH_ALL,
    payload: [],
  });
};
