/**
 * Created by alucas on 16/1/17.
 */
import * as types from '../../constants/actionTypes';
// import { CALL_API, Schemas } from '../middleware/api'

export function start(uuid) {
  return (dispatch, getState) => {
    let { NEW_GAME } = types;
    console.log(NEW_GAME);
    console.log(uuid);
      return dispatch({
        'sudoku': {
          uuid: uuid,
        },
        type: NEW_GAME
      });
    }
}

export function load(login, requiredFields = []) {
  return (dispatch, getState) => {
    return dispatch(fetchTopalbums())
  }
}