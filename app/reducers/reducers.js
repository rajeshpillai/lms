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

var homeReducer = (state = featuredState, action) => {
    console.log(`EXECUTING ${action.type}: `);
    switch(action.type) {
        case 'FEATURED_COURSE':
            return state;
        default:
            return state;
    }
};

// featured action generator
var featuredCourse = () => {
    return {
        type: "FEATURED_COURSE"
    }
};


var reducers = combineReducers({
    home: homeReducer
});

var store = createStore(reducers, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export  {store,  featuredCourse};
