import { SET_COMPANY } from "../actionTypes";

const initialState = {
};

const shiftBrowser = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY: {
      return {
        ...state,
        browsedCompany: action.payload.companyName
      }
    }
    default: {
      return state;
    }
  }
};

export default shiftBrowser;
