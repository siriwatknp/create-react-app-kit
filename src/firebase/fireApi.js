import { db } from './fireConfig';

export const connectDB = (ref, onValid = () => {}, onInvalid = () => {}) => {
  db.ref(ref).on('value', snapshot => {
    if (snapshot.val()) {
      onValid(snapshot.val(), snapshot);
    } else {
      onInvalid(snapshot.val(), snapshot);
    }
  });
};

export default () => ({
  connectDB,
});
