import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {logger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import axios from 'axios';

var featuredState = [
    {
        id: 1,
        slug: "course-1",
        title: "Course 1",
        desc: "A great course",
        cover_image: "http://lorempixel.com/400/200/nature/"
    },
    {
        id: 2,
        slug: "course-2",
        title: "Course 2",
        desc: "A great course 2",
        cover_image: "http://lorempixel.com/400/200/nature/"
    },
    {
        id: 3,
        slug: "course-3",
        title: "Course 3",
        desc: "A great course 3",
        cover_image: "http://lorempixel.com/400/200/nature/"
    }
];

var homeReducerAsync = (state = {featuredCourse: [], isFetching: false}, action) => {
    console.log(`EXECUTING ${action.type}: `);
    switch(action.type) {
        case 'FETCH_FEATURED_COURSE_PENDING':
            return {
                isFetching: true,
                featuredCourse: []
            };
        case 'FETCH_FEATURED_COURSE_FULFILLED':
            return {
                isFetching: false,
                featuredCourse: action.payload
            };

        default:
            return state;
    }
};

var fetchFeaturedCourse = () => {
    console.log("fetchFeaturedCourse =>")
    return {
        type: 'FETCH_FEATURED_COURSE',
        payload: new Promise((resolve, reject) => {
            axios.get("/course/featured")
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                });
            // var clearTime = setTimeout(function () {
            //     featuredState.push(
            //         {
            //             id: featuredState.length+1,
            //             slug: "course-" + featuredState.length+1,
            //             title: "Course " + featuredState.length+1,
            //             desc: "A great course",
            //             cover_image: "http://lorempixel.com/400/200/nature/"
            //             }
            //     );
            //     clearTimeout(clearTime);
            //     resolve(featuredState);
            // }, 3000);  
        })
    }
};


var reducers = combineReducers({
    featuredCourse: homeReducerAsync
});

var store = createStore(reducers, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
), applyMiddleware(promise(),logger));

export {store, fetchFeaturedCourse};
