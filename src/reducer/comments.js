import { normalizedComments as defaultComments } from "./../fixtures";

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});

console.log(commentsMap);

export default (commentsState = commentsMap, action) => {
  const { type } = action;

  switch (type) {
    
    default:
      return commentsState
  }
}
