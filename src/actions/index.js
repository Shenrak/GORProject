let nextMessageId = 0

export const addMessage = (text, owner) => ({
  type: 'ADD_MESSAGE',
  id: nextMessageId++,
  text,
  owner
})
