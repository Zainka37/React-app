
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CURRENT = 'SET_TOTAL_CURRENT';
const TOGGLE_IS_FEATCHING = 'TOGGLE_IS_FEATCHING';
// изначально наш стейт ничего не имеет, то этому он ундефайнет, из за этого
//надо сделать перемуннуцю которая будет ято то тда изначально ложить
// переменная которая хранит изнвачальные данныен для 1
// отрисовки а дальше уже коглда будет что то отрисовываться у нас
// будет онон заменено на то что передано
  let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
    isFeatching: false
  };
 const usersReducer = (state = initialState, action) => {
   switch (action.type) {
     case FOLLOW:
       return {
       ...state,
       // map  если менчем елемент массива
       users: state.users.map( u => {
         if (u.id === action.userId) {
           return {...u, follower: true}
         }
         return u;
       })
     }

   case UNFOLLOW:
     return {
     ...state,
     // map  если менчем елемент массива
     users: state.users.map(  u => {
       if(u.id === action.userId) {
         return {...u, follower: false}
       }
       return u;
     })
   }
   case SET_USER:{
   // возвращает (склеиваем)старых юзеров которые там были + новых которые пришли из екшенов
    return {...state , users:action.users}
  }
   case SET_CURRENT_PAGE: {
     return {...state , currentPage: action.currentPage}
   }
   case SET_TOTAL_CURRENT: {
     return {...state , totalUsersCount: action.count}
   }
   case TOGGLE_IS_FEATCHING: {
     return {...state , isFeatching: action.isFeatching}
   }
     default:
       return state;
   }
 }
 // екшены
 export let follow = (userId) => {
   return {
     type: FOLLOW,
     userId
   }
 }
 export let unfollow = (userId) => {
   return {
     type: UNFOLLOW,
     userId
     }
 }
 // екшен который будет сетать юзеров
  export let setUsers  = (users) => {
    return {
      type: SET_USER,
      users
      }
  }
  export let setCurrentPage  = (currentPage) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage
      }
  }
  export let setCurrent = (count) => {
    return {
      type: SET_TOTAL_CURRENT,
      count
      }
  }
  export let setIsFeatching  = (isFeatching) => {
    return {
      type: TOGGLE_IS_FEATCHING,
      isFeatching
      }
  }

 export default usersReducer;
