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
    uuid = '2fe289f3-6ecc-4082-944d-aaad3e401079';
    let newGamePromise = () => database.child('games').child(uuid).once('value').then(function(snapshot) {
      r = snapshot.val();
      console.log(uuid);
      if (r === null) {
        console.log('NOT exists', r);
        return dispatch({
          'sudoku': {
            uuid: uuid,
          },
          type: NEW_GAME
        });
      } else {
        console.log('exists', r);
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