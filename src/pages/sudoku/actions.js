/**
 * Created by alucas on 16/1/17.
 */
import * as types from '../../constants/actionTypes';
import database from '../../helpers/firebase';
import uuidV4 from 'uuid/v4';

export function start(uuid) {
  return (dispatch, getState) => {
    let { NEW_GAME } = types;
    let r;
    let uuid = uuidV4();
    let newGamePromise = () => database.child('games').child(uuid).once('value').then(function(snapshot) {
      r = snapshot.val();
      if (r === null) {
        let sudoku = {
          sudoku: {
            uuid: uuid,
          }
        };
        database.child(`games/${uuid}`).set({
          ...(sudoku.sudoku)
        });
        return dispatch({
          ...sudoku,
          type: NEW_GAME
        });
      } else {
        uuid = uuidV4();
        newGamePromise();
      }
    });
    newGamePromise();
  }
}

export function load(login, requiredFields = []) {
  return (dispatch, getState) => {
    return dispatch(fetchTopalbums())
  }
}