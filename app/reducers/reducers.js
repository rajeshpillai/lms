import {createStore, combineReducers, compose} from 'redux'

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
        case 'START_FEATURE_COURSE_FETCH':
            return {
                isFetching: true,
                featuredCourse: []
            };
        case 'COMPLETE_FEATURE_COURSE_FETCH':
            return {
                isFetching: false,
                featuredCourse: action.featuredCourse
            };

        default:
            return state;
    }
};

var startFeaturedCourseFetch = () => {
    return {
        type: 'START_FEATURE_COURSE_FETCH',
        featuredCourse: [],
    };
};

var completeFeaturedCourseFetch = (course) => {
    return {
        type: 'COMPLETE_FEATURE_COURSE_FETCH',
        featuredCourse: course
    };
};

var fetchFeaturedCourse = () => {
    console.log("fetchFeaturedCourse =>")
    store.dispatch(startFeaturedCourseFetch());
    setTimeout(function () {
        console.log("completeFeaturedCourseFetch =>", featuredState)
        store.dispatch(completeFeaturedCourseFetch(featuredState));
    }, 1000);
};

// featured action generator
var featuredCourse = () => {
    return {
        type: "FEATURED_COURSE"
    }
};


var reducers = combineReducers({
    featuredCourse: homeReducerAsync
});

var store = createStore(reducers, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export {store,  featuredCourse, fetchFeaturedCourse};
