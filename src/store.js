

export const initialStore = () => {
  return {
  
    contactos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
  
    case 'traer_contacts':
      return {
        ...store,
        contactos: action.payload
      };

    default:
      throw Error('Unknown action.');
  }
}
