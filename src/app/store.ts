// configureStore를 사용하면 추가 유형이 필요하지 않습니다. 그러나 RootState 유형과 Dispatch 유형을 추출하여 필요에 따라 참조할 수 있습니다. 저장소 자체에서 이러한 유형을 유추하는 것은 더 많은 상태 조각을 추가하거나 미들웨어 설정을 수정할 때 올바르게 업데이트된다는 것을 의미합니다.
// 이러한 유형은 app/store.ts와 같은 저장소 설정 파일에서 직접 내보낸 후 다른 파일로 직접 가져오는 것이 안전합니다.
import { configureStore } from "@reduxjs/toolkit";

// Slice
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

// 스토어 자체에서 RootState와 AppDispatch 유형을 유추합니다.
export type RootState = ReturnType<typeof store.getState>
// 유추 유형 { posts: PostsState, CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch