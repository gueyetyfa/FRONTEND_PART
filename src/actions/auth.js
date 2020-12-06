import axios from "axios";

export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: 'USER_LOADING' });
  
    axios
      .get('http://localhost:8000/api/auth/user', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: 'USER_LOADED',
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
    });
};
  
export const login = (email, password) => dispatch => {
    
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
      // Request Body
      const body = JSON.stringify({ email, password });
    
      axios
        .post('http://localhost:8000/api/auth/login/', body, config)
        .then((res) => {
          dispatch({
            type: 'LOGIN_SUCCESSFUL',
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
}


export const logout = () => (dispatch, getState) => {
    axios
      .post('http://localhost:8000/api/auth/logout/', null, tokenConfig(getState))
      .then((res) => {
        //dispatch({ type: 'CLEAR_LEADS' });
        dispatch({
          type: 'LOGOUT_SUCCESSFUL',
        });
      })
      .catch((err) => {
        console.log(err);
      });
};


export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // If token, add to headers config
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  
    return config;
  };
