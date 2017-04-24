export const selectLibrary = (libraryId) => {
  return {
      type: 'SelectLibrary',
      payload: {
        libraryId: libraryId,
      },
  };
};
