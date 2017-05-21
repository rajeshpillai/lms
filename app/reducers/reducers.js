import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {logger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import axios from 'axios';


var featuredCoursesReducer = (state = {featuredCourse: [], isFetching: false}, action) => {
    console.log(`EXECUTING ${action.type}: `);
    switch(action.type) {
        case 'FETCH_FEATURED_COURSES_PENDING':
            return {
                isFetching: true,
                featuredCourse: []
            };
        case 'FETCH_FEATURED_COURSES_FULFILLED':
            return {
                isFetching: false,
                featuredCourse: action.payload
            };

        default:
            return state;
    }
};

var courseReducer = (state = {isFetching: false}, action) => {
    console.log(`EXECUTING ${action.type}: `);
    switch(action.type) {
        case 'FETCH_COURSE_PENDING':
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCH_COURSE_FULFILLED':
            return {
                ...state,
                isFetching: false,
                course: action.payload.course
            };

        default:
            return state;
    }
};

var chapterReducer = (state = {isFetching: false}, action) => {
    switch(action.type) {
        case 'FETCH_CHAPTERS_PENDING':
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCH_CHAPTERS_FULFILLED':
            return {
                ...state,
                isFetching: false,
                courseChapters: action.payload.courseChapters
            };

        default:
            return state;
    }
};

var fetchFeaturedCourse = () => {
    console.log("fetchFeaturedCourse =>")
    return {
        type: 'FETCH_FEATURED_COURSES',
        payload: new Promise((resolve, reject) => {
            axios.get("/course/featured")
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                });
        })
    }
};

var fetchCourse = (course_id) => {
    console.log("fetchCourse =>", course_id);
    return {
        type: 'FETCH_COURSE',
        payload: new Promise((resolve, reject) => {
            axios.get("/chapters/:course_id/" + course_id)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                });
        })
    }
};

var fetchChapters = (course_id) => {
    console.log("fetchChapters =>", course_id);
    return {
        type: 'FETCH_CHAPTERS',
        payload: new Promise((resolve, reject) => {
            axios.get("/course/" + course_id)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                });
        })
    }
};

var reducers = combineReducers({
    featuredCourse: featuredCoursesReducer,
    course: courseReducer,
    chapters:chapterReducer 
});

var store = createStore(reducers, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
), applyMiddleware(promise(),logger));

export {store, fetchFeaturedCourse, fetchCourse, fetchChapters}; 
