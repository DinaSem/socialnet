import profileReducer, {addPostActionCreator} from "./profile-reducer";

//1.test data
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'Как же круто', likesCount: 22},
        {id: 3, message: 'Уря-уря', likesCount: 30},
    ],
    profile: null,
    status: ''
}
let action = addPostActionCreator("it-incubator")
it('length of state should be correct', () => {

    //2.action
    let newState = profileReducer(state, action);

    //3.expectations
    expect(newState.posts.length).toBe(4)
})
it('message should be it-incubator', () => {

    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe('it-incubator')
})

