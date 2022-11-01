export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const {
        payload: { status, board, description, priority, title },
      } = action;
      return {
        ...state,
        boards: [
          ...state.boards,

          {
            id: Math.random(),
            title,
            description,
            status,
            category: board,
            priority,
          },
        ],
      };

    case "DELETE_TASK":
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        boards: state.boards.filter((task) => task.id !== id),
      };

    case "EDIT_TASK":
      const task = state.boards.find(
        (task) => task.id === Number(action.payload.id)
      );

      return {
        ...state,
        boards: state.boards.map((t) => {
          if (t.id === task.id) {
            return {
              id: task.id,
              title: action.payload.title,
              description: action.payload.description,
              status: action.payload.status,
              category: action.payload.category,
              priority: action.payload.priority,
            };
          }
          return t;
        }),
      };
    case "LOGIN":
      return {
        ...state,
        userInfo: {
          isLoggedIn: true,
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case "ADD_BOARD":
      return {
        ...state,
        boards: [...state.boards, { category: action.payload.newBoardName }],
      };
  }
}
