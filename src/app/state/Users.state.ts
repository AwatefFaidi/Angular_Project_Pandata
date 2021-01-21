import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Users} from '../models/users';
import {AddUsers, GetUsers, UpdateUsers, DeleteUsers, SetSelectedUsers} from '../actions/Users.action';
import {UsersService} from '../services/Users.service';
import {tap} from 'rxjs/operators';

export class UsersStateModel {
    users: Users[];
    selectedUser: Users;
}

@State<UsersStateModel>({
    name: 'users',
    defaults: {
        users: [],
        selectedUser: null
    }
})
export class UserState {

    constructor(private userService: UsersService) {
    }

    @Selector()
    static getUserList(state: UsersStateModel) {
        return state.users;
    }

    @Selector()
    static getSelectedUser(state: UsersStateModel) {
        return state.selectedUser;
    }

    @Action(GetUsers)
    getTodos({getState, setState}: StateContext<UsersStateModel>) {
        return this.userService.getAll().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                users: result,
            });
        }));
    }
/*
    @Action(AddTodo)
    addTodo({getState, patchState}: StateContext<TodoStateModel>, {payload}: AddTodo) {
        return this.todoService.addTodo(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                todos: [...state.todos, result]
            });
        }));
    }
    @Action(UpdateTodo)
    updateTodo({getState, setState}: StateContext<TodoStateModel>, {payload, id}: UpdateTodo) {
        return this.todoService.updateTodo(payload, id).pipe(tap((result) => {
            const state = getState();
            const todoList = [...state.todos];
            const todoIndex = todoList.findIndex(item => item.id === id);
            todoList[todoIndex] = result;
            setState({
                ...state,
                todos: todoList,
            });
        }));
    }


    @Action(DeleteTodo)
    deleteTodo({getState, setState}: StateContext<TodoStateModel>, {id}: DeleteTodo) {
        return this.todoService.deleteTodo(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.todos.filter(item => item.id !== id);
            setState({
                ...state,
                todos: filteredArray,
            });
        }));
    }

    @Action(SetSelectedTodo)
    setSelectedTodoId({getState, setState}: StateContext<TodoStateModel>, {payload}: SetSelectedTodo) {
        const state = getState();
        setState({
            ...state,
            selectedTodo: payload
        });
    }*/
}